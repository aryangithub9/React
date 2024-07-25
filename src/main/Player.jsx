import React, { useState } from 'react'

function Player(){

    const [player, setplayer]  = useState([])

    const addplayer=()=>{
        
        const np = document.getElementById("input").value.trim();

        if(input.value !=""){
        document.getElementById("input").value="";
        setplayer(p=>[...p,np]);
        }
    }

    const removePlayer = (index) => {
        const players = [...player]; // create a copy of the original array
        players.splice(index, 1); // remove the element at the specified index
        setplayer(players); 
    }


    const handleKeyPress =(event)=>{
    if(event.key === 'Enter'){
        addplayer();  
    }

}

    

    return(
        <div className="footballplayer">
            <h1>List of Football Player</h1>
            <input type="text" id="input" onKeyDown={handleKeyPress}/>
            <button onClick={addplayer}>Addplayer</button>
            <ol>
                
                {player.map((pn,index) =>
                    <li key={index} onClick={()=>removePlayer(index)}>{pn}</li>)}
                
            </ol>
        
        </div>

    );

}

export default Player;