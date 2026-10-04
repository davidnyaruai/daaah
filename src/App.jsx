import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: '#e2e8f0' }}>
      <h1 style={{ margin: 0, fontSize: 48 }}>daaah</h1>
      <p style={{ margin: 0, color: '#94a3b8' }}>everything there is</p>
      <button onClick={() => setCount((c) => c + 1)} style={{ padding: '10px 20px', fontSize: 16, borderRadius: 8, border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer' }}>
        Clicked {count} times
      </button>
    </main>
  )
}
