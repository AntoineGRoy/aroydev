import React, { useRef, useEffect } from "react"
import { Box, Button, Typography } from "@mui/material"
import { useFastStore } from "./fastContext"

// Test component that only subscribes to counter 'a'
export function FastCounterA() {
  const [counterA, set] = useFastStore((s) => s.counters.a)
  const renderCount = useRef(0)
  
  useEffect(() => {
    renderCount.current += 1
    console.log('FastCounterA: Re-rendered, render count:', renderCount.current, 'counterA:', counterA)
  })

  const increment = () => {
    console.log('FastCounterA: Incrementing counter A')
    set({
      counters: { a: counterA + 1, b: 1, c: 2 },
    })
  }

  return (
    <Box p={2} border="1px solid blue">
      <Typography>Fast Counter A: {counterA} (renders: {renderCount.current})</Typography>
      <Button onClick={increment} variant="contained" sx={{ m: 1 }}>
        Increment A
      </Button>
    </Box>
  )
}

// Test component that only subscribes to counter 'b'
export function FastCounterB() {
  const [counterB, set] = useFastStore((s) => s.counters.b)
  const renderCount = useRef(0)
  
  useEffect(() => {
    renderCount.current += 1
    console.log('FastCounterB: Re-rendered, render count:', renderCount.current, 'counterB:', counterB)
  })

  const increment = () => {
    console.log('FastCounterB: Incrementing counter B')
    set({
      counters: { a: 0, b: counterB + 1, c: 2 },
    })
  }

  return (
    <Box p={2} border="1px solid red">
      <Typography>Fast Counter B: {counterB} (renders: {renderCount.current})</Typography>
      <Button onClick={increment} variant="contained" sx={{ m: 1 }}>
        Increment B
      </Button>
    </Box>
  )
}

export function FastCounterControls() {
  const [counters, set] = useFastStore((s) => s.counters)
  const renderCount = useRef(0)
  
  useEffect(() => {
    renderCount.current += 1
    console.log('FastCounterControls: Re-rendered, render count:', renderCount.current, 'counters:', counters)
  })

  const increment = (key) => {
    console.log('FastCounterControls: Incrementing', key)
    set({
      counters: { ...counters, [key]: counters[key] + 1 },
    })
  }

  return (
    <Box p={2} border="1px solid green">
      <Typography>Fast CounterControls (renders: {renderCount.current})</Typography>
      {(["a", "b", "c"]).map((k) => (
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

// Separate component that subscribes to counters for calculation
function TotalCalculator({ onCalculate }) {
  const [counters] = useFastStore((s) => s.counters)
  
  const handleCalculate = () => {
    const sum = Object.values(counters).reduce((a, b) => (a as number) + (b as number), 0)
    onCalculate(sum)
  }

  return (
    <Button onClick={handleCalculate} variant="outlined" sx={{ mt: 1 }}>
      Recalculate Total
    </Button>
  )
}

export function FastTotalDisplay() {
  const [total, set] = useFastStore((s) => s.total)
  const renderCount = useRef(0)
  
  useEffect(() => {
    renderCount.current += 1
    console.log('FastTotalDisplay: Re-rendered, render count:', renderCount.current, 'total:', total)
  })

  const handleCalculate = (sum) => {
    console.log('FastTotalDisplay: Setting total to:', sum)
    set({ total: sum })
  }

  return (
    <Box p={2} border="1px solid green" mt={2}>
      <Typography>Fast Total: {total} (renders: {renderCount.current})</Typography>
      <TotalCalculator onCalculate={handleCalculate} />
    </Box>
  )
} 