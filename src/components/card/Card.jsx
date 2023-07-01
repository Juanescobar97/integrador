import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ name, species, gender, image, onClose, id, detailId }) {
   return (

      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={() => onClose(id)} className={styles.buttonx}>X</button>
         </div>
        
         <Link className={styles.link} to={`detail/${id}`}>  
            <div className={styles.imageContainer}>
            <h2 className={styles.names}>{ name }</h2>
            <img className={styles.imagen} src={image} alt={name} />
         </div>
         <div className={styles.propsContainer}>
            <h2>{ species }</h2>
            <h2>{ gender }</h2>
            </div>
         </Link>
         </div>
   );
}

export default Card;
         
        
         
         
