import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([])
   
   const onSearch = (id) => {
      if (characters.find(char => char.id === parseInt(id) )) {
         alert(`Ya existe el personaje con el id ${id} `)
      return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if(data.name){
            setCharacters((oldChars)=> [...oldChars, data])
         }
    }).catch(err => alert(err.response.data.error))
   }

   function onClose(id){
      const filtered = characters.filter((char) => char.id !== Number(id))
      setCharacters(filtered)
    }
   
   return (
      <div>
         <div>
            <Nav onSearch={ onSearch }/>
            <Cards characters={characters} onClose={onClose} />
         </div>
      </div>
   );
}

export default App;
