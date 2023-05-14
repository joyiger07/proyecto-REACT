import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios'


export default function CharacterDescription() {
    const {id} = useRouter().query
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        async function getApi() {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log(res.data)
            setCharacter(res.data)
        }
        if (id != undefined) getApi()
    }, [id])

    return <div>
        {
            character
                ? <>
                    <img src={character.image} />
                    <h1>Name: {character.name}</h1>
                    <p>Gender: {character.gender}</p>
                    <p>Created: {character.created}</p>
                    {character.episode.map(e => <p>{e}</p>)}
                </>
                : <></>
        }
    </div>
}