'use client'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
      <Link href={'/'}>Strona glowna</Link>
      <br />
      <Link href={'/zadanie1'}>Zadanie1</Link>
      <br />
      <Link href={'/zadanie2'}>Zadanie2</Link>
      <br />
      <Link href={'/zadanie3'}>Zadanie3</Link>
      <br />
      <Link href={'/zadanie4'}>Zadanie4</Link>
      <br />
      <Link href={'/zadanie5'}>Zadanie5</Link>
    </div>
  )
}
