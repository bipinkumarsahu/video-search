import React, { Component, useState } from "react";

const SearchBar = ({onSearchSubmit})=>{

  const [term,setTerm] = useState('');

  const onFormSubmit = event =>{
    event.preventDefault();
    onSearchSubmit(term);
  }

  
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="ui fluid action input">
            <input type="text" placeholder="Search videos here"
            value={term}
            onChange={e=>setTerm(e.target.value)} />
            <button className="ui right labeled icon button" type="submit" >
              <i className="search icon"></i>
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }


export default  SearchBar ;