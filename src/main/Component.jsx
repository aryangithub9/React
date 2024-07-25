import React, { useState } from "react";

function Component(){
    let[name , setname] = useState("Guest");
    let [Age,SetAge] = useState(0);
    let [isemployeed , SetStatus] = useState(true)



    const Status=()=>{
        SetStatus(!isemployeed)
    }

    const updatename=()=>{
        name = "Arpit"
        setname(name);
    }
    const Incrementage=()=>{
        SetAge(Age+1)
    }

    const Resetage=()=>{
        SetAge(0)
    }

    const Decrementage=()=>{
        SetAge(Age-1)
    }
    return(
    
    <>  <div className="cl">
        <div className="age">
        <p>Name : {name}</p>
        <button onClick={updatename}>Set name</button>
        </div>

        <div className="age">
        <p id="Age">Age : {Age}</p>
        <button onClick={Incrementage}>IncreMent Age</button>
        <button onClick={Decrementage}>DecreMent Age</button>
        <button onClick={Resetage}>Reset Age</button>

        <div className="Status">
        <p> IsEmployed: {isemployeed?"Yes":"No"}</p>
        <button onClick={Status}>Toggle Status</button>
        </div>

        


        </div>
        </div>

    </>


    )
}

export default Component