import React, { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;
const url = "https://mellow-florentine-74b2ce.netlify.app";

function App() {
  useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
