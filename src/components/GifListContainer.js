import React, { useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const[gif, setGif] = useState([])
    const [search, setSearch] = useState("dolphins");
    
    
 useEffect(() => {
 
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Qa1Sqpgjt103S3PjeEOBWXIcM0e3zIVP&rating=g")
    .then((response)=>response.json())
    .then((data)=>{setGif(gif)
        
        
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        ;
    })

},[])


return (
<div>
 <GifList  gifs={gif} />
  <GifSearch onSubmitQuery={setSearch} />
</div>
)
}

export default GifListContainer