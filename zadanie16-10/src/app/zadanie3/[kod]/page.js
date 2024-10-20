'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Kod({ params }) {
  const [loading, setLoading] = useState(false)
  const [MyError, setMyError] = useState(false)
  const [country, setCountry] = useState(null)
  console.log(country)

  async function pobierz() {
    setLoading(true)
    console.log('pobierz')

    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
      console.log(response)

      if (!response.ok) throw Error

      const data = await response.json()
      setCountry(data[0])
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
          <div>
            <Image alt='flaga' src={country?.flags.png} width={50} height={50} />
            <h2>{country?.name.common}</h2>
            <h2>{country?.capital}</h2>
            <h2>{country?.population}</h2>
            <h2>{country?.continents[0]}</h2>
          </div>
        </>
      )}
    </div>
  )
}
