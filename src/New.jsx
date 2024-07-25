import React, { useState } from 'react'
function New(){
    let [name,setname] = useState("Guest");
    let [quantity,setquantity] = useState(1);
    let [comment,setcomment] = useState("");
    let [payment,setpayment ] = useState("Visa");
    let [Shipping , setShipping] = useState("");


    let handlenamechange=(event)=>{
        setname(event.target.value)
    }

    let handlequantitychange=(event)=>{
        setquantity(event.target.value)
    }

    const handlecommentchange=(event)=>{
        setcomment(event.target.value);
    }

    const handlepayment =(event)=>{
        setpayment(event.target.value)

    }

    const handleshipping =(event)=>{
        setShipping(event.target.value)
    }



    return(
        <div>
            <input type="text" value={name} onChange={handlenamechange} />
            <p>Name :{name}</p>


            <input type="number" value={quantity} onChange={handlequantitychange}/>
            <p>Quantity:{quantity}</p>

            <textarea type ="text" value={comment} onChange={handlecommentchange} placeholder='Please Share Your Experience'/>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlepayment} >
            <option value="Visa">Visa</option>
            <option value="UPI">UPI</option>
            <option value="Rupay">Rupay</option>
            <option value="Paypal">Paypal</option>
            </select>
            <p>Payment:{payment}</p>
            
            <label>
                <input type="radio" value = "PickUp"
                checked={Shipping ==="PickUp"} onChange={handleshipping}/>
                PickUp
            </label>
            <label>
                <input type="radio" value = "Delievery"
                checked={Shipping ==="Delievery"} onChange={handleshipping}/>
                Delivery
            </label>
            <p>Shipping :{Shipping}</p>
        </div>
    );
}

export default New