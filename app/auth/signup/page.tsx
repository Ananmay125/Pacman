"use client"

import "@/app/css/authentication.css" 
import "@/app/css/footer.css"
import { useState } from 'react'

import "@/app/css/authentication.css" 
import "@/app/css/footer.css"
import GitHubButton from "@/app/components/github-button/page"

export default function SignIn() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(!name || !password){
      setError("All Fields are nessasary");
    }else {
      setError("");
    }
  };

  return (
    <>
      <nav>
        <img src="/Pacman.svg" alt="logo" className="logo"></img>
        <h1 className="main-heading">Pacman</h1>
      </nav>
      <div className="form-container">
        <div className="form-container-div">
          <form>
              <h1>Sign Up</h1>
              <label>
                  Username<br/>
                  <input onChange={(e) => setName(e.target.value)} name="username" type="text" /><br/>
              </label>
              <label>
                  Password<br/>
                  <input onChange={(e) => setPassword(e.target.value)}  name="password" type="password" /><br/>
              </label>
              <button className="credential-signin-button">Sign Up</button>
              <p>already signed up? login <a className="sign-text" href="signup">here</a></p>
              { error && (
                <p className="error-message">{error}</p>
              )}
            </form>
        </div>
      </div>
      <div className="form-1-div">
          <div className="form-1">
            <GitHubButton/>
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