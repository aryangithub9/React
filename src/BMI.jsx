import React, { useState } from "react";

function BMI() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const handleHeight = (event) => {
    setHeight(event.target.value);
    };

    const handleWeight = (event) => {
    setWeight(event.target.value);
    };

    const calculateBmi = () => {
    const bmiValue = (weight / (height / 100) ** 2);
    setBmi(bmiValue.toFixed(2));
    };

    

    return (
    <div className="Bmi">
        <h1>BMI Calculator</h1>
        <p>Enter Your Height </p>
        <input type="text" placeholder ="Enter Your Height (in cm)"
        value={height} onChange={handleHeight} max={200}/>
        <p>Enter Your Weight</p>
        <input type="text" value={weight} onChange={handleWeight}
        placeholder="Enter Your Weight (in kg)" />
        <br />
        <button onClick={calculateBmi}>Calculate BMI</button>
        <h2>Your BMI is : { bmi} </h2>
    </div>
    );
}

export default BMI;