'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [url, setUrl] = useState({
    urlName: '',
    pobierz: false,
  })
  const [loading, setLoading] = useState(false)
  const [MyError, setMyError] = useState(false)
  const [result, setResult] = useState(null)

  async function pobierz() {
    setLoading(true)
    console.log('pobierz')

    try {
      const response = await fetch(url.urlName)
      if (response.status !== 200) throw Error

      const data = await response.json()
      console.log(data)
      setUrl((prevUrl) => ({ ...prevUrl, pobierz: false }))
      setUrl((prevUrl) => ({ ...prevUrl, urlName: '' }))
      setResult(data)
    } catch (error) {
      setMyError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url.pobierz) pobierz()
  }, [url.pobierz])

  return (
    <div>
      {MyError && <h1>Wystapil blad</h1>}
      {loading && <h1>loading...</h1>}

      {!MyError && !loading && (
        <>
          <h1>Wyniki w konsoli</h1>
          <input
            value={url.urlName}
            name='url'
            onChange={(e) => setUrl((prevUrl) => ({ ...prevUrl, urlName: e.target.value }))}
            placeholder='url name'
          />
          <button onClick={() => setUrl((prevUrl) => ({ ...prevUrl, pobierz: true }))}>pobierz</button>
          <br />
        </>
      )}
    </div>
  )
}
