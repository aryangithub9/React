import React, { useState } from "react";

function Practice() {
    const [cars, setCars] = useState([]);
    const [company, setCompany] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());
    const [model, setModel] = useState("");

    const addCar = () => {
    const newCar = {
        company,
        year,
        model,
    };
    setCars((prevCars) => [...prevCars, newCar]);
    setCompany("");
    setModel("");
    setYear(new Date().getFullYear());
    };

    const removeCar = (index) => {
        setCars((prevCars) => prevCars.filter((car, i) => i !== index));
    };

    const handleCompanyChange = (event) => {
    setCompany(event.target.value);
    };

    const handleModelChange = (event) => {
    setModel(event.target.value);
    };

    const handleYearChange = (event) => {
    setYear(event.target.value);
    };

    return (
    <div className="car">
        <h1>List Of Car</h1>
        <ul>
        {cars.map((car, index) => (
            <li key={index} onClick={()=>removeCar(index
            
            )}>
            {car.year} {car.company} {car.model}
            </li>
        ))}
        </ul>
        <input type="text" onChange={handleCompanyChange} 
        value={company} placeholder="Enter Your Car Company"/>
        <br />
        <input type="text" onChange={handleModelChange}
         value={model} placeholder="Enter your Car model" />
        <br />
        <input type="number" onChange={handleYearChange} 
        value={year}  placeholder="Enter your car year"/>
        <br />
        <button onClick={addCar}>Add</button>
    </div>
    );
}

export default Practice;