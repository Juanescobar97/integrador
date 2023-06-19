import './App.css';
import Card from './components/card/Card';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         <Cards characters={characters} />
         {/* <Card
            key = {characters.id}
            id={characters.id}
            name={characters.name}
            // status={Rick.status}
            species={characters.species}
            gender={characters.gender}
            // origin={Rick.origin.name}
            image={characters.image}
             */}
         />
      </div>
   );
}

export default App;
