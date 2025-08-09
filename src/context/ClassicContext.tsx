import React, { createContext, useContext, useState } from "react"

export type State = {
  counters: { a: number; b: number; c: number }
  total: number
}


const ClassicContext = createContext<{
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
} | null>(null)

export const ClassicProvider = ({ initialState, children }: { initialState: State, children: React.ReactNode }) => {
  const [state, setState] = useState<State>(initialState)
  return (
    <ClassicContext.Provider value={{ state, setState }}>
      {children}
    </ClassicContext.Provider>
  )
}

export const useClassic = () => {
  const ctx = useContext(ClassicContext)
  if (!ctx) throw new Error("Outside ClassicProvider")
  return ctx
} 