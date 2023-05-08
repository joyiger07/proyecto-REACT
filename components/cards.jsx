import { useState } from "react";
import  FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteOutlinedIcon from "@mui/icons-material/AddLocationAltRounded";
import { useEffect } from "react";


export default function Cards({titulo, descripcion, imgUrl, setCarrito}) {
  const [liked, setLiked] = useState(false)

  function chageHangler() {
    setCarrito(prev => !liked ? prev +1 : prev -1)
    setLiked(prev => !prev)
  }

      return <div className="cards">
        <img src={imgUrl} />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>     
        <button 
          className={"button" + liked && " liked"}
          onClick={() => chageHangler()}
          >
         {
             liked ? <FavoriteIcon/> : <FavoriteOutlinedIcon/> 
         }
        </button>
  
  </div>
} 
 
