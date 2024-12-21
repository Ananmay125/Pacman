"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import GitHubButton from "@/app/components/github-button/GitHubButton"

import "@/app/css/authentication.css" 
import "@/app/css/footer.css"

export default function SignIn() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    })

    if (result?.error) {
      setError(result.error)
    } else {
      router.push("/")
    }
  }

  return (
    <>
      <nav>
        <img src="/Pacman.svg" alt="logo" className="logo"></img>
        <h1 className="main-heading">Pacman</h1>
      </nav>
      <div className="form-container">
        <div className="form-container-div">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSignIn()
            }}
          >
            <h1>Login</h1>
            <label>Username<br/>
              <input
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br/>
            </label>
            <label>Password<br/>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br/>
            </label>
            <button type="submit" className="credential-signin-button">Sign In</button>
            <p>Don&apos;t have an account? Sign up <a className="sign-text" href="signup">here</a></p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </div>
      <div className="form-1-div">
        <div className="form-1">
          <GitHubButton />
        </div>
      </div>

      <footer>
        <ul className="footer-ul">
          <img src="/Pacman.svg" alt="logo" className="logo-1"></img>
          <h1 className="main-heading-footer">Pacman</h1>
          <li className="footer-li">Home</li>
          <li className="footer-li">Favorites</li>
          <li className="footer-li">Emulate</li>
          <li className="footer-li">About Pacman</li>
        </ul>
        <ul className="footer-ul-2">
          <li className="footer-li-2">Legal</li>
          <li className="footer-li-2">Terms and Conditions</li>
          <li className="footer-li-2">Contact</li>
          <li className="footer-li-2">bruh</li>
        </ul>
      </footer>
    </>
  )
} 
