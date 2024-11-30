import "./page.css";

export default function Home() {
  return (
    <>
      <nav>
        <img src="Pacman.svg" alt="logo" className="logo"></img>
        <h1 className="main-heading">Pacman</h1>
        <ul>
          <li>Games</li>
          <li>Roms</li>
          <li>Favorites</li>
          <li>Home</li>
          <li>Peak</li>
          <li>Spicy_32</li>
        </ul>
        <img src="favicon.ico" className="avatar"></img>
      </nav>
      <main>
          <div className="hero-text-div">
            <h1 className="hero-text">Play any <span>Arcade</span> games from <span>anywhere!</span></h1>
          </div>
          <div className="button-div">
            <button className="get-started">Get Started</button>
          </div>
      </main>
    </>
  );
}
