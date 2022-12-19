import React from 'react'
import "./GameImage.css"

const Merger = ({setSelectedGames,selectedGames}) => {
    const delGames = () =>{
        setSelectedGames([{background_image: "https://www.howardluksmd.com/wp-content/uploads/2021/10/featured-image-placeholder-728x404.jpg"}])
    }
    return (
        <div>
            <button onClick={()=>(delGames())}>deletar</button>
            <div>
                    <img className='gameImg' src={selectedGames[0].background_image}/>
            </div>
        </div>)            
}
  
  export default Merger;