import React from 'react'
import ComponentC from './ComponentC'
import { UserContext } from './ComponentA'
import { useContext } from 'react'


function ComponentB(){

    const user = useContext(UserContext)

    return (
    <div className="box">
        <h1>ComponentB</h1>
        <h1>{user}</h1>
        <ComponentC />
    </div>
    )
}

export default ComponentB
