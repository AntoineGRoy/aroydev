import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";

export default function createFastContext(initialState) {
  const StoreContext = createContext(null);

  function Provider({ children }) {
    const stateRef = useRef(initialState);
    const subscribersRef = useRef(new Set());
    const storeRef = useRef(null);
    
    if (!storeRef.current) {
      storeRef.current = {
        get: () => stateRef.current,
        
        set: (value) => {
          console.log('Fast Context: Setting new value:', value);
          stateRef.current = { ...stateRef.current, ...value };
          console.log('Fast Context: Notifying', subscribersRef.current.size, 'subscribers');
          subscribersRef.current.forEach((callback) => callback());
        },
        
        subscribe: (callback) => {
          console.log('Fast Context: Adding subscriber, total:', subscribersRef.current.size + 1);
          subscribersRef.current.add(callback);
          return () => {
            console.log('Fast Context: Removing subscriber, total:', subscribersRef.current.size - 1);
            subscribersRef.current.delete(callback);
          };
        }
      };
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore(selector) {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("Store not found");
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => {
        const result = selector(store.get());
        console.log('Fast Context: Selector result:', result);
        return result;
      },
      () => selector(initialState),
    );

    return [state, store.set];
  }

  return {
    Provider,
    useStore,
  };
}
  