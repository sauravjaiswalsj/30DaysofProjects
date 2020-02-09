import React from 'react';
import './Search.css';
const SearchBar = (props)=>{
return(
    <>
            <div className="search">
                <form action = "" onSubmit={props.handleSubmit}>
                    <input placeholder="Search Tweets" onChange={props.handleChange} type="text">
                    </input>
                    <button className="button-design"  type="submit" >Search</button>
                </form>
            </div>
      </>
);

};

export default SearchBar;
