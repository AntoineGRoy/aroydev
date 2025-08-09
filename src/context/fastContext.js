import createFastContext from "./createFastContextProvider"

const initialState = {
  counters: { a: 0, b: 1, c: 2 },
  total: 3,
}

export const {
  Provider: FastProvider,
  useStore: useFastStore,
} = createFastContext(initialState)

// Convenience hooks for easier usage
export const useFastSelector = (selector) => {
  const [state] = useFastStore(selector)
  return state
}

export const useFastSet = () => {
  const [, set] = useFastStore(() => null) // We only need the setter
  return set
}
