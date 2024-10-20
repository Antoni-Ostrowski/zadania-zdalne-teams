'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [loading, setLoading] = useState(false)
  const [MyError, setMyError] = useState(false)
  const [countries, setCountries] = useState([])

  async function pobierz() {
    setLoading(true)
    console.log('pobierz')

    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      console.log(response)

      if (!response.ok) throw Error

      const data = await response.json()
      console.log(data)
      setCountries(data)
    } catch (error) {
      console.log(error)

      setMyError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    pobierz()
  }, [])

  return (
    <div>
      {MyError && <h1>Wystapil blad</h1>}
      {loading && <h1>loading...</h1>}

      {!MyError && !loading && (
        <>
          {countries?.map((country, idx) => {
            return (
              <div key={idx}>
                <Image alt='flaga' src={country.flags.png} width={50} height={50} />
                <h2>{country.name.common}</h2>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
