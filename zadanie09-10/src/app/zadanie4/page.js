'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [user, setUser] = useState({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@example.com',
    phone: '123-456-789',
  })
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)

  useEffect(() => {
    setFirstName(user?.firstName)
  }, [user?.firstName])

  useEffect(() => {
    setLastName(user?.lastName)
  }, [user?.lastName])

  function handleUserInfoChange(e) {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      <h1>
        Imie: <input value={firstName} name='firstName' onChange={(e) => handleUserInfoChange(e)} />
      </h1>
      <h1>
        Imie: <input value={lastName} name='lastName' onChange={(e) => handleUserInfoChange(e)} />
      </h1>
    </div>
  )
}
