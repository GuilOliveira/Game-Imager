import './Main.css';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import Header from '../components/Header';

import GetRawgKey from '../GetRawgKey';
console.log(GetRawgKey())

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <Header/>
      </header>
      <TitleText/>
      <SearchBar/>
    </div>
  );
}

export default Main;