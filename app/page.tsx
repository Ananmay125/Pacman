import "./css/page.css";
import "./css/footer.css"
import "./css/content.css"
import "./css/responsive.css"

export default function Home() {

  const client_username = "bruh";

  return (
    <>
      <nav>
        <img src="Pacman.svg" alt="logo" className="logo"></img>
        <h1 className="main-heading">Pacman</h1>
        <ul className="navbar-ul">
          <li className="navbar-li"><a className="navbar-li-a" href="/auth/signin">Games</a></li>
          <li className="navbar-li"><a className="navbar-li-a" href="/auth/signin">Roms</a></li>
          <li className="navbar-li"><a className="navbar-li-a" href="/auth/signin">Favorites</a></li>
          <li className="navbar-li"><a className="navbar-li-a" href="/auth/signin">Home</a></li>
          <li className="navbar-li"><a className="navbar-li-a" href="/auth/signin">Peak</a></li>
          <li className="navbar-li"><a className="navbar-li-a" href="/auth/signin">Sign-in</a></li>
        </ul>
        <img src="favicon.ico" className="avatar"></img>
        <img src="../menu.png" className="drop-menu"></img>
      </nav>
      <main>
          <div className="hero-text-div">
            <h1 className="hero-text">Play any <span>Arcade</span> games from <span>anywhere!</span></h1>
          </div>
          <div className="button-div">
            <button className="get-started"><a href="#main-section">Get Started</a></button>
          </div>
          <div id="emulate-game-div">
            <div className="emulate-game-text-div">
              <h1 className="emulate-game-text">Want to emulate <br/> your own game?</h1>
              <p className="emulate-game-p">Drop a ROM in this box</p>
            </div>
            <div className="emulate-box">
              <div className="emulate">
                <h2 className="emulate-box-text">Drop the ROM here</h2>
                <input type="file" className="picker"/>
              </div>
            </div>
          </div>

          <div id="main-section">
            <div className="content-div">
                <h1 className="content-heading">Popular Games</h1>
                <div className="game-card-div">
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                </div>
            </div>
            <div className="content-div">
                <h1 className="content-heading">Popular Games</h1>
                <div className="game-card-div">
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                </div>
            </div>
            <div className="content-div">
                <h1 className="content-heading">Popular Games</h1>
                <div className="game-card-div">
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                  <div className="game-card"></div>
                </div>
            </div>
          </div>
      </main>
      <footer>
        <ul className="footer-ul">
          <img src="Pacman.svg" alt="logo" className="logo"></img>
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
  );
}
