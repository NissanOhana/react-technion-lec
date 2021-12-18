import React from 'react';
import './App.css';
import { Header } from './components/AppHeader/Header';
import { PageLayout } from './components/Pages/PageLayout';

function App() {

  const [page, setPage] = React.useState<number>(0);

  const changePage = (newPage: number) => {
    setPage(newPage);
    // Think about validations...    
  }

  return (
    <div className="root">
      <Header changePage={changePage}/>
      <PageLayout page={page} />
    </div>
  );
}

export default App;
