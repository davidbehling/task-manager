import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './index.css'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault()

    if ([email, password].includes("")) {
      alert("erro")
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/admin', { replace: true })
        }).catch(() => {
          console.log("Error register!")
        })
    }
  }

  return (
    <div className="register-container">
      <h1> Register </h1>
      <span> Create on account </span>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Input your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Input your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"> Register </button>
      </form>

      <Link className="button-login" to="/">
        Already have an account? Login!
      </Link>
    </div>
  )
}
