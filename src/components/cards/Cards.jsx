import Card from '../card/Card';
import styles from "./Cards.module.css";


function Cards(props) { //[{..}, {..}] 
   const { characters } = props;

   return (
       
      <div className={styles.container}>
   
         {
            characters.map(({id, name, species, gender, image}) => (
              <Card
              key = {id}
              id = {id}
              name = {name}
              species = {species}
              gender = {gender}
              image = {image}
              onClose={() => props.onClose(id)}
               />
            ))}
         
      </div>
   );
}


export default Cards