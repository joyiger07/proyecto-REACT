import Cards from '@/components/Cards'
import styles from '@/styles/Home.module.css'
import Cardslist from '../public/lista.json'
import { useEffect, useState } from 'react'
import axios from 'axios'

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
const [characters, setCharacters] = useState([])

  const initProfile = {
    name: "DarkMode",
    image: "http/..."
  }

  const [profile,setProfile] = useState({})
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setProfile(initProfile)
  }, [])
  useEffect(() => {
    setDark(false)
  }, [profile])

  useEffect(() => {
    async function getApi() { 
      const res = await axios.get("https://rickandmortyapi.com/api/character")      
      console.log(res.data.results)
      setCharacters(res.data.results)
      }
    getApi()
  }, [])

  const handleProfile = (name, image) => {
    setProfile({name, image})
  }
 
  return ( 
          
          <div className={styles.background + " " + (dark && styles.dark)}>            
            <div className={styles.navbar}>        
              <div onClick={() => setDark(!dark)}> 
               <h3>{profile.name}</h3>
               <img src={profile.image}/>
              </div>             
            </div>
            
            { characters.map(characters =>
            <Cards key={characters}
              id={characters.id}
              name={characters.name}
              description={characters.especies}
              image={characters.image}
              change={handleProfile}
              dark={dark}
              />)
            }
           </div>
          
   )
}

