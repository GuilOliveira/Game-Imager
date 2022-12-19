import React from 'react'
import './SearchBar.css';



const SearchBar = ({actualText, setSelectedGames, 
                    setActualText, setSearchedText,
                    searchResponse, setSearchResponse}) => {

// Limpar a caixa de suggestions
    const clearData = () =>{
        setSearchResponse({results:[""]})
    }

// Faz a alteração do texto atual
    const modifie = (text) =>{
        clearData()
        setActualText(text.target.value)
    }

// Faz a busca
    const enter = () =>{
        clearData()
        setSearchedText(actualText)
    }

// Escolhe o jogo
    const addGame = (game) => {
        setSelectedGames([game])
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
          {searchResponse.results.slice(0, 15).map((value,key) => {
            return (
              <a className="dataItem" target="_blank">
                <p className='gameOptions' onClick={()=>(addGame(value))}>{value.name}</p>
              </a>
            );
          })}
        </div>
      )}
        </div>
    );
  }
  
  export default SearchBar;