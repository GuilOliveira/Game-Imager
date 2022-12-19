import './Main.css';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import Header from '../components/Header';

import GetRawgKey from '../GetRawgKey';
import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = GetRawgKey()
const URL = "https://api.rawg.io/api/games?"


function Main() {

  const [actualText, setActualText] = useState();
  const [searchedText, setSearchedText] = useState();
  const [searchResponse, setSearchResponse] = useState({results:[""]});
  const [selectedGames, setSelectedGames] = useState();

  useEffect(() =>  {
    async function fetchApi (){
      if (searchedText == undefined){return}
      if (searchedText == ""){return}
      const response = await fetch(`${URL}search=${encodeURI(searchedText)}&key=${API_KEY}`)
          const responsejson = await response.json()
          console.log(responsejson)
          setSearchResponse(responsejson)
      }
    fetchApi()
  }, [searchedText]);



  return (
    <div className="Main">
      <header className="Main-header">
        <Header/>
      </header>
      <TitleText/>
      <SearchBar actualText={actualText} 
        searchedText={searchedText} 
        setActualText={setActualText} 
        setSearchedText={setSearchedText}
        searchResponse={searchResponse}
        setSearchResponse={setSearchResponse}
        selectedGames={selectedGames}
        setSelectedGames={selectedGames}/>
      
    </div>
  );
}

export default Main;