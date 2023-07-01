import React from "react";
import Foto from './yo.png';
import style from './About.module.css';

const About = () => {
    return(
    <>
        <div>
            <h1 className={style.creador}>Creador</h1>
        </div>
         <p className={style.subtitulo}>
            Mi nombre es Juan Escobar, tengo 26 años y estoy
            en la carrera de Full Stack Developer de SoyHenry
            </p>
        <div>
            <img className={style.photo} src={Foto} alt="fotomia"/>
        </div>
    
    </>
)}


export default About;