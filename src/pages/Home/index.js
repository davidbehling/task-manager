import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './index.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()

    if ([email, password].includes("")) {
      alert("erro")
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/admin', { replace: true })
        }).catch(() => {
          console.log("Error login!")
        })
    }
  }

  return (
    <div className="home-container">
      <h1> Tasks List </h1>
      <span> Manage your tasks </span>

      <form className="form" onSubmit={handleLogin}>
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

        <button type="submit"> Access </button>
      </form>

      <Link className="button-register" to="/register">
        No count! Sign up
      </Link>
    </div>
  )
}
