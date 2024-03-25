import React, { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;
// const url = "https://mellow-florentine-74b2ce.netlify.app";

function App() {
  const handleFullscreen = () => {
    document.documentElement.requestFullscreen();
  };

  useEffect(() => {
    setTimeout(() => {
      tg.expand();
    }, 300);
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
      <button onClick={handleFullscreen}>Fullscreen</button>
    </div>
  );
}

export default App;
