import styles from "./Form.module.css";
import photo from "./fondo login.png";
import { useState, useEffect } from "react";
import validation from "./validation";


const Form = ({login}) =>{
    
 const [userData,setUserData] = useState({
    email: '',
    password: '',
 })

 const [errors, setErrors] = useState({
    email: '',
    password: '',
 })

 const handleChange = (event) => {  
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        })
    )
 }
 const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
 }
    return(
    <form onSubmit={handleSubmit} className={styles.container}>
        <img className={styles.photo} src={photo} alt="fondo" />
        <label htmlFor="email" value={userData.email} >Email: </label>
        <input type="text" name="email" onChange={handleChange}/>
        {errors.email && <p style={{color: 'red'}} >{errors.email}</p>}
        <ul/>
        <label htmlFor="password" value={userData.password}>Password:</label>
        <input type="password" onChange={handleChange}
            name="password" />
            {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}
        <ul/>
        <button>Login</button>
    </form>
    )
}


export default Form;