import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([])
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
       if (!characters.find(char => char.id === data.id)) {
         if(data.name){
            setCharacters((oldChars)=> [...oldChars, data])
         }else{
            alert(`Ya existe el personaje con el id ${id} `)
         }
      } 
    }).catch(err => alert(err.response.data.error))
   }
   
   return (
      <div>
         <div>
            <Nav onSearch={ onSearch }/>
            <Cards characters={characters} />
         </div>
      </div>
   );
}

export default App;
