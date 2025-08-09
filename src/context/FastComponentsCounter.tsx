import React from "react"
import { Box, Button, Typography } from "@mui/material"
import { useFastSelector, useFastSet } from "./fastContext"

export function FastCounterControls() {
  const counters = useFastSelector((s) => s.counters)
  const set = useFastSet()

  const increment = (key: keyof typeof counters) => {
    set((prev) => ({
      counters: { ...prev.counters, [key]: prev.counters[key] + 1 },
    }))
  }

  return (
    <Box p={2} border="1px solid green">
      <Typography>Fast CounterControls</Typography>
      {(["a", "b", "c"] as const).map((k) => (
        <Button
          key={k}
          onClick={() => increment(k)}
          variant="contained"
          sx={{ m: 1 }}
        >
          Increment {k}: {counters[k]}
        </Button>
      ))}
    </Box>
  )
}

export function FastTotalDisplay() {
  const total = useFastSelector((s) => s.total)
  const counters = useFastSelector((s) => s.counters)
  const set = useFastSet()

  const calculateTotal = () => {
    const sum = Object.values(counters).reduce((a, b) => a + b, 0)
    set({ total: sum })
  }

  return (
    <Box p={2} border="1px solid green" mt={2}>
      <Typography>Fast Total: {total}</Typography>
      <Button onClick={calculateTotal} variant="outlined" sx={{ mt: 1 }}>
        Recalculate Total
      </Button>
    </Box>
  )
}
