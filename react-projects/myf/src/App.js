import React,{useState} from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox'
import './App.css';
function App(){
  const [loading,setLoading]=useState(true);
  const [searchItem,searchState]=useState('');
  const [movies,setState] =useState([]);
  const handleSubmit =(e)=>{
    e.preventDefault();
    //const API_KEY = process.env.Movie_API;
    //console.log(API_KEY);
    setLoading(true);
    const API_KEY = '37d20177';
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchItem}`)
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setState(movies.concat(data.results));
      setLoading(false);
    });
    //console.log(movies)
  };
  const handleChange =(e)=>{
    searchState(e.target.value);
  };
  const resetInputField =()=>{
    searchState("");
  }
  return(
    <>
      <div className="App">
      <Nav />
      <SearchBox handleSubmit={handleSubmit} handleChange={handleChange}/>
      </div>
    </>
  );
}

export default App;