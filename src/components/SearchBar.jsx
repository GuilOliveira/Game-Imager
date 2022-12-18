import React from 'react'
import { Button } from 'semantic-ui-react'
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search'>
            <input type='text' className='searchBar'/>
            <Button className='searchButton'>🔍</Button>
        </div>
    );
  }
  
  export default SearchBar;