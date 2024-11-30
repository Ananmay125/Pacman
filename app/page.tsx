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
          <div className="emulate-game-div">
            <div className="emulate-game-text-div">
              <h1 className="emulate-game-text">Want to emulate <br/> your own game?</h1>
              <p className="emulate-game-p">Drop a ROM in this box</p>
            </div>
            <div className="emulate-box">
              <div className="emulate">
                <h2 className="emulate-box-text">Drop the ROM here</h2>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
