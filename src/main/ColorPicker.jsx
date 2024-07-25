import React, { useState } from "react"

function ColorPicker(){
    let [color , setcolor ] = useState("#");

    let handlecolorchange=(event)=>{
        setcolor(event.target.value)
    }


    return(


    <>   <div className="Colorpicker">
            <p>Color Picker</p>
            <div className="color-display"
            style={{
                backgroundColor:color,
                borderRadius :"10%",
                border:"2px solid black",
                height:"400px",
                width :"400px",
                textAlign:"center"
                }} >
            <p >Selected  Color:{color}</p>
            </div>
            <label> Select A Color</label>
            <input type="color" value={color} onChange={handlecolorchange} />


        </div>
    
    </>
    )

}

export default ColorPicker