import { useEffect, useState } from 'react';
import style from './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import axios from 'axios';
import Detail from './components/detail/Detail';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/form/Form';


function App() {
   const location = useLocation()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const email = "juanescobar97i@gmail.com";
   const password = "123asd";
   
   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate("/home")
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
            <header className='App'> 
            <img src='https://rick-xi.vercel.app/static/media/Rick.d75ee1faae37f5f0f2ea.png' className='imagen'/></header>
               {location.pathname !== "/" &&
               <Nav onSearch={ onSearch }/>}
               <Routes>
                  <Route path='/' element={<Form login={login} />}/>
                  <Route path='/home' element={<Cards onClose={onClose} characters={characters}  />}/>
                  <Route path='about' element={<About/>}/>
                  <Route path='detail/:detailId' element={<Detail/>}/>
               </Routes>
               
         </div>
      
   
   );
}

export default App;
