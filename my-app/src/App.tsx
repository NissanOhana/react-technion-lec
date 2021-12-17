import React from 'react';
import './App.css';
import { Header } from './components/AppHeader/Header';
import { AmigosPage } from './components/Pages/Amigos';

function App() {
  return (
    <div className="root">
      <Header />
      <AmigosPage />
    </div>
  );
}

export default App;
