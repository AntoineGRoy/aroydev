import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { ClassicProvider } from "../../context/ClassicContext"
import { ClassicCounterControls, ClassicTotalDisplay } from "../../context/ClassicComponents"
import { FastProvider } from "../../context/fastContext"
import { FastCounterControls, FastTotalDisplay, FastCounterA, FastCounterB } from "../../context/FastComponents"

const ContextPage = () => (
  <Layout>
    <Seo title="Context Demo" />
    <div style={{ display: "flex", gap: 40, padding: 20, paddingTop: 100 }}>
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
  </Layout>
)

export default ContextPage
