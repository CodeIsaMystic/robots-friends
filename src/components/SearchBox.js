import React from "react";

function SearchBox({ searchField, searchChange }) {
  return ( 
    <div className='pa2'>
      <input 
        type='search' placeholder=' Search robots'
        className='pa2 mb1 ba b--green bg-lightest-blue br-pill shadow-5'
        onChange={searchChange} />
    </div>
  );
}

export default SearchBox;