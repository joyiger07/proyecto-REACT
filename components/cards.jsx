import styles from '@/styles/Cards.module.css'
import Link from "next/link";

const Cards = ({id, name, description, image, change, dark}) => {

      return <div className={styles.Cards + " " + (dark && styles.dark)}>
        <img src={image} className={styles.image}/>
        <h3>{name}</h3>
        <p className={styles.paragraph}>loren maria delgado{description}</p> 
         <Link href={`/characters/${id}`} className={styles.button}>Iniciar</Link>  
        <button 
          className={styles.button}
          onClick={() => change(name, image)}> inicio
        </button> 
  
  </div>
} 
export default Cards



