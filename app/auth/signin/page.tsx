import { signIn } from '@auth.ts'
import "@/app/css/authentication.css" 
import "@/app/css/footer.css"

export default function SignIn() {
  return (
    <>
      <nav>
        <img src="/Pacman.svg" alt="logo" className="logo"></img>
        <h1 className="main-heading">Pacman</h1>
      </nav>
      <div className="form-container">
        <div className="form-container-div">
          <form
              action={async (formData) => {
             "use server"
              await signIn("credentials", formData)
              } }
              >
              <h1>Login</h1>
              <label>
                  Email<br/>
                  <input name="email" type="email" /><br/>
              </label>
              <label>
                  Password<br/>
                  <input name="password" type="password" /><br/>
              </label>
              <button className="credential-signin-button">Sign In</button>
              <p>already signed up? login <a className="sign-text" href="signup">here</a></p>
            </form>
        </div>
      </div>
      <div className="form-1-div">
        <form className="form-1"
          action={async () => {
          "use server"
          await signIn("github")
          } }
          >
          <button className="github-button" type="submit">Signin with GitHub</button>
        </form>
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
