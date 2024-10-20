'use client'
import React, { useState } from 'react'

export default function page() {
  const [number, setNumber] = useState(2)
  return (
    <div>
      {number % 2 == 0 ? <h1>liczba jest parzysta</h1> : <h1>liczba jest nieparzysta</h1>}
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Wpisz liczbę' />
    </div>
  )
}
