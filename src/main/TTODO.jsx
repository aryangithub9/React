import React, { useState } from "react";

function TTODO(){

    let [tasks, settasks] = useState(["Wake Up ","Going For bath, "]);
    let [newtask, setnewtask] = useState("");

    const handleinputchange=(event)=>{
        setnewtask(event.target.value)
    };

    const addtask=()=>{
        if(newtask.trim() !== ""){
        settasks(t=>[...t,newtask])
        setnewtask("");
        }
    };

    function deletetask(index){
        const updatedtask = tasks.filter((_ ,i)=>i!==index);
        settasks(updatedtask);

    }
    let movetaskup=(index)=>{
        if(index>0){
            const updatedtask = [...tasks];
            [updatedtask[index],updatedtask[index-1]] =
            [updatedtask[index-1],updatedtask[index]]
            settasks(updatedtask);
        }
    }
    const movetaskdown=(index)=>{
        if(index<tasks.length-1){
            const updatedtask = [...tasks];
            [updatedtask[index],updatedtask[index+1]] =
            [updatedtask[index+1],updatedtask[index]]
            settasks(updatedtask);
        }
    }

    function keypress(event){
        if(event.key == "Enter"){
            addtask()
        }
    }


    return(
    <div className="todoapp">
        <h1>TODO</h1>
        <div>
            <input type="text" placeholder="Enter A Task" 
            value={newtask} onChange={handleinputchange} onKeyUp={keypress}/>
            <button onClick={(addtask)}>ADD TASK</button>
            <ol>
                {tasks.map((t,index)=>
                <li key={index}>
                    <span>{t}</span>
                    <button onClick={()=>deletetask(index)}>Delete</button>
                    <button onClick={()=>movetaskup(index)}>Move Up</button>
                    <button onClick={()=>movetaskdown(index)}>Move Down</button>
                </li>)}

            </ol>

        </div>
    </div>
    )
}

export default TTODO