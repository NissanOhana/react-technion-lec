import React from 'react';
import './App.css';
import { Header } from './components/AppHeader/Header';
import { PageLayout } from './components/Pages/PageLayout';
import { Character } from './types';

function App() {

  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [page, setPage] = React.useState<number>(0);

  const changePage = (newPage: number) => {
    setPage(newPage);
    // Think about validations...    
  }

  return (
    <div className="root">
      <Header changePage={changePage}/>
      <PageLayout page={page} characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
