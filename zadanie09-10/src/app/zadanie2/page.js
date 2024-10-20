'use client'

import React, { useState, useEffect } from 'react'

export default function UpdateTitlePage() {
  const [number, setNumber] = useState('')

  useEffect(() => {
    document.title = `${number}`
  }, [number])

  return (
    <div>
      <h1>Podaj liczbę:</h1>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Wpisz liczbę' />
    </div>
  )
}
