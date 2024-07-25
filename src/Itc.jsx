import React, { useState } from "react";

function Comp() {
    const [tax, setTax] = useState(0);
    const [income, setIncome] = useState(0);
    const [taxCalculated, setTaxCalculated] = useState(false);

    const handleIncome = (event) => {
        setIncome(event.target.value);
    };

    const calculateTax = () => {
        let taxableIncome = parseInt(income);
        if (taxableIncome <= 300000) {
            setTax(0);
        } else if (taxableIncome <= 600000) {
            setTax(taxableIncome * 0.05);
        } else if (taxableIncome <= 900000) {
            setTax(taxableIncome * 0.1);
        } else if (taxableIncome <= 1200000) {
            setTax(taxableIncome * 0.15); // 15% tax rate
        } else if (taxableIncome <= 1500000) {
            setTax(taxableIncome * 0.2); // 20% tax rate
        } else {
            setTax(taxableIncome * 0.3); // 30% tax rate for income above Rs. 15,00,000
        }
        setTaxCalculated(true);
    };

    const keypress = (event) => {
        if (event.key === 'Enter') {
            calculateTax();
        }
    };

    return (
        <div className="incometax">
            <h1>Income Tax Calculator</h1>
            <input
                type="number"
                placeholder="Enter your income in &#8377;"
                value={income}
                onChange={handleIncome}
                onKeyUp={keypress}
            />
            <button onClick={calculateTax}>Calculate Tax</button>
            {taxCalculated && <h2>Your Tax is : &#8377;{tax.toFixed(2)}</h2>}
        </div>
    );
}

export default Comp;