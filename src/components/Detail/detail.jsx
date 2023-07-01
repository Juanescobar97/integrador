import style from './Detail.module.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
    
const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState([]);
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                }else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
            return setCharacter({});
    }, [detailId])
     
    return(
        <div >
            <h1 className={style.container} >{character?.name}</h1>
            <p className={style.container} >{character?.species}</p>
            <p className={style.container} >{character?.gender}</p>
            <p className={style.container} >{character.origin?.name}</p>
            <img className={ style.imagen }src={character?.image} alt="" />
        </div>
    )
}
export default Detail;