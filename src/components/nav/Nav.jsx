import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink, Link } from 'react-router-dom';
import styleNav from './Nav.module.css'


function Nav({onSearch}){

    return(
       <nav className={styles.container}>
         
            <button><NavLink to="" className={({ isActive }) => isActive ? styleNav.active : styleNav.disable} >Home</NavLink></button>
            <button><NavLink to="about" className={({ isActive }) => isActive ? styleNav.active : styleNav.disable} > About</NavLink></button>
            <SearchBar className={styles.button} onSearch={(onSearch)}/>
       </nav>
    )}




export default Nav;