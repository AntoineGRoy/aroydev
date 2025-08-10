import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link as MuiLink } from '@mui/material'
import { ClassicProvider } from "../../context/ClassicContext"
import { ClassicCounterControls, ClassicTotalDisplay } from "../../context/ClassicComponents"
import { FastProvider } from "../../context/fastContext"
import { FastCounterControls, FastTotalDisplay, FastCounterA, FastCounterB } from "../../context/FastComponents"

const ContextPage = () => (
  <Layout>
    <Seo title="Context Demo" />
    <div style={{ padding: 20, paddingTop: 100 }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1>React Context Performance Demo</h1>
        <p style={{ marginBottom: 20 }}>
          Comparing classic React Context vs. optimized context using useSyncExternalStore
        </p>
        <MuiLink 
          href="https://github.com/AntoineGRoy/aroydev/blob/master/src/context/createFastContextProvider.js" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ 
            display: 'inline-block',
          }}
        >
          View Code on GitHub →
        </MuiLink>
      </div>
      <div style={{ display: "flex", gap: 40 }}>
      <div>
        <h3>Classic Context</h3>
        <ClassicProvider initialState={{ counters: { a: 0, b: 1, c: 2 }, total: 3 }}>
          <ClassicCounterControls />
          <ClassicTotalDisplay />
        </ClassicProvider>
      </div>
      <div>
        <h3>Fast Context</h3>
        <FastProvider>
          <FastCounterControls />
          <FastTotalDisplay />
        </FastProvider>
      </div>
      <div>
        <h3>Fast Context - Isolated Test</h3>
        <FastProvider>
          <FastCounterA />
          <FastCounterB />
        </FastProvider>
      </div>
      </div>
    </div>
  </Layout>
)

export default ContextPage
