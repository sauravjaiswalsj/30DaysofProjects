import React from 'react';
import './App.css';
import Banner from './Components/layouts/Banner';
import SearchBar from './Components/layouts/SearchBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Banner title1="Tweet" title2="Search" />
        <SearchBar /> 
      </header>
    </div>
  );
}

export default App;
