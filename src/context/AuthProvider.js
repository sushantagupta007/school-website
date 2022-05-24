import cogoToast from 'cogo-toast'
import { useRouter } from 'next/router'
import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const router = useRouter()

  // const allContext = useCustomAuth() // It needs if we use it different file
  const login = (data) => {
    console.log(data)
    try {
      fetch('http://localhost:5000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data === 'Invalid Password') {
            cogoToast.error('Invalid Password')
          }
          if (data !== 'Invalid Password') {
            setUser(data)
            router.push('/')
          }
        })
    } catch (err) {
      console.log(err)
    }
  }

  const logout = () => {
    return setUser({})
  }

  const makeSubscribe = (data) => {
    console.log('Authprover', data)
    fetch('http://localhost:5000/subscribe/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          cogoToast.error('You are subscribed')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const AuthReturn = {
    user,
    login,
    logout,
    makeSubscribe,
  }
  return (
    <AuthContext.Provider value={AuthReturn}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
