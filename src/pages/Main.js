// Importando outros componentes

import './Main.css';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import Header from '../components/Header';
import GameImage from '../components/GameImage';

import GetRawgKey from '../GetRawgKey';
import { useState, useEffect } from 'react';

// Definindo a chave da api e a url base das requests
const API_KEY = GetRawgKey()
const URL = "https://api.rawg.io/api/games?"


function Main() {
// Definindo as "variaveis", states são usados para persistir dados
  const [actualText, setActualText] = useState();
  const [searchedText, setSearchedText] = useState();
  const [searchResponse, setSearchResponse] = useState({results:[""]});
  const [selectedGames, setSelectedGames] = useState([{background_image: "https://www.howardluksmd.com/wp-content/uploads/2021/10/featured-image-placeholder-728x404.jpg"}]);

// Sempre que o usuário pesquisar por um jogo, é feita uma requisição para API
  useEffect(() =>  {
    async function fetchApi (){
      if (searchedText == undefined){return}
      if (searchedText == ""){return}
      const response = await fetch(`${URL}search=${encodeURI(searchedText)}&key=${API_KEY}`)
          const responsejson = await response.json()
          setSearchResponse(responsejson)
      }
    fetchApi()
  }, [searchedText]);


// Apenas a estrutura do projeto
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
        setSelectedGames={setSelectedGames}/>
      <GameImage setSelectedGames={setSelectedGames} selectedGames={selectedGames} />
    </div>
  );
}

export default Main;