import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getVersions = () => {
    const v = window.versions || {}
    return {
      node: (v.node && v.node()) || 'N/A',
      chrome: (v.chrome && v.chrome()) || 'N/A',
      electron: (v.electron && v.electron()) || 'N/A',
    }
  }

  return (
    <>
    <h1>test</h1>
      <p>
        Node.js version: {getVersions().node} <br />
        Chrome version: {getVersions().chrome} <br />
        Electron version: {getVersions().electron}
      </p>
    </>
  )
}

export default App
