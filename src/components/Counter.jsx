import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="counter-card" aria-label="Counter demo">
      <p className="counter-value">Count: <strong>{count}</strong></p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((currentCount) => currentCount - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default Counter
