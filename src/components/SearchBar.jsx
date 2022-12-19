import React from 'react'
import './SearchBar.css';



const SearchBar = ({actualText,selectedGames, setSelectedGames, 
                    setActualText, setSearchedText,
                    searchResponse, setSearchResponse}) => {

    const clearData = () =>{
        setSearchResponse({results:[""]})
    }

    const modifie = (text) =>{
        clearData()
        setActualText(text.target.value)
    }

    const enter = () =>{
        clearData()
        setSearchedText(actualText)
    }

    return (
        <div >
            <div className='search'>
                <input type='text' className='searchBar'
                value={actualText} onChange={(e) => modifie(e)}
                onKeyPress={event => {if (event.key === 'Enter') {enter()}}}
                />
                <button className='searchButton' onClick={()=>enter()} >🔍</button>
            </div>
            {searchResponse.results[0] != "" && (
        <div className="dataResult">
          {searchResponse.results.slice(0, 15).map((value) => {
            return (
              <a className="dataItem" target="_blank">
                <p className='gameOptions'>{value.name}</p>
              </a>
            );
          })}
        </div>
      )}
        </div>
    );
  }
  
  export default SearchBar;