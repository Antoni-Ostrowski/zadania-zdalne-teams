'use client'
import React, { useState } from 'react'

export default function page() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>add to counter</button>
      </div>
    </div>
  )
}
