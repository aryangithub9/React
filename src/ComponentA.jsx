import React, { useState , createContext } from 'react'
import ComponentB from './ComponentB'
export const UserContext = createContext();


function ComponentA() {

    const [ user , setuser] = useState("Aryan")

    return (
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <UserContext.Provider value={user}>
        <ComponentB user={user}/>
        </UserContext.Provider>

    </div>
    )
}

export default ComponentA
