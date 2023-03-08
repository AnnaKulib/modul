import React from "react";
import { Routes, Route } from "react-router-dom";
// import { LanguageProvider } from "./LanguageContext";
import MainPage from "./pages/MainPage";
import GamesPage from "./pages/GamesPage";
import GamePage from "./pages/GamePage";
import WinningPage from "./pages/WinningPage";
import TryAgainPage from "./pages/TryAgainPage";
import "./App.css";

function App() {
  return (
    // <LanguageProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/winning" element={<WinningPage />} />
        <Route path="/try-again" element={<TryAgainPage />} />
      </Routes>
    </div>
    // </LanguageProvider>
  );
}

export default App;
