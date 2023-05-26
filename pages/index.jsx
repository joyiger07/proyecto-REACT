import Cards from '@/components/Cards'
import useAuth from '@/components/config/hooks/useAuth'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'


// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
const [characters, setCharacters] = useState([])

const { loginWithGoogle, getUserInfo } = useAuth()



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
  
  async function useGoogle() {
    loginWithGoogle()
    .then(res => {
      console.log(res)
    })
  }

  function verInfo() {
    console.log(getUserInfo())
  }
  return ( 
          
          <div className={styles.background + " " + (dark && styles.dark)}> 
               
            <div className={styles.navbar}> 
            <div>
              <Button onClick= {useGoogle}>
                <img
                // src=""
                width="0"
                height="0"               
                />
              google
              </Button>
              
              <div>
              <Button onClick= {verInfo}>
              <img
                // src=""
                width="0"
                height="0"
                />
                 Registrate
               </Button>
              </div>
              </div>     
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

