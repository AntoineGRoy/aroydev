import React from "react"
import { Button, Box, Typography } from "@mui/material"
import { useClassic } from "./ClassicContextProvider"

export function ClassicCounterControls() {
  const { state, setState } = useClassic()

  const increment = (key: keyof typeof state.counters) => {
    setState((prev) => ({
      ...prev,
      counters: { ...prev.counters, [key]: prev.counters[key] + 1 },
    }))
  }

  return (
    <Box p={2} border="1px solid grey">
      <Typography>Classic CounterControls</Typography>
      {(["a", "b", "c"] as const).map((k) => (
        <Button
          key={k}
          onClick={() => increment(k)}
          variant="contained"
          sx={{ m: 1 }}
        >
          Increment {k}: {state.counters[k]}
        </Button>
      ))}
    </Box>
  )
}

export function ClassicTotalDisplay() {
  const { state, setState } = useClassic()

  const calculateTotal = () => {
    const sum = Object.values(state.counters).reduce((a, b) => a + b, 0)
    setState((prev) => ({ ...prev, total: sum }))
  }

  return (
    <Box p={2} border="1px solid grey" mt={2}>
      <Typography>Classic Total: {state.total}</Typography>
      <Button onClick={calculateTotal} variant="outlined" sx={{ mt: 1 }}>
        Recalculate Total
      </Button>
    </Box>
  )
}
