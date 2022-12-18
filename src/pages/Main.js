import './Main.css';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import Header from '../components/Header';


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
