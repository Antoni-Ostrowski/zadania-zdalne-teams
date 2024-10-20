'use client'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [MyError, setMyError] = useState(false)

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  console.log(filteredCountries)

  const [selectedOption, setSelectedOption] = useState('All countries')

  async function pobierz() {
    setLoading(true)
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')

      if (!response.ok) throw new Error('Failed to fetch countries')

      const data = await response.json()
      setCountries(data)
      setFilteredCountries(data)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedOption)
    let filtered
    if (selectedOption === 'All countries') filtered = countries
    else filtered = countries.filter((country) => country.continents[0] === selectedOption)

    setFilteredCountries(filtered)
  }

  return (
    <div>
      {MyError && <h1>Wystąpił błąd</h1>}
      {loading && <h1>Loading...</h1>}

      {!MyError && !loading && (
        <>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <Select
              onValueChange={setSelectedOption} // Update the state on value change
              defaultValue={selectedOption}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select a theme' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='All countries'>All countries</SelectItem>
                <SelectItem value='Africa'>Africa</SelectItem>
                <SelectItem value='Asia'>Asia</SelectItem>
                <SelectItem value='Europe'>Europe</SelectItem>
                <SelectItem value='Oceania'>Oceania</SelectItem>
                <SelectItem value='South America'>South America</SelectItem>
                <SelectItem value='North America'>North America</SelectItem>
                <SelectItem value='Antarctica'>Antarctica</SelectItem>
              </SelectContent>
            </Select>
            <Button type='submit'>Zastosuj</Button>
          </form>

          {filteredCountries?.map((country, idx) => {
            return (
              <div key={idx}>
                <h2>{country.name.common}</h2>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
