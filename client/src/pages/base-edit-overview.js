import React from "react";
import '../styles/edit-overview.css';
import { useState } from 'react';

const BaseEditOverview = () => {
    const [seller_name, setName] = useState("");
    const [seller_email, setEmail] = useState("");
    const [seller_phoneNumber, setPhoneNumber] = useState("");
    const [seller_summary, setSummary] = useState("");
    const handleOnSubmit = async(e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:8080/create', {
                method: "post",
                body: JSON.stringify({ seller_name, seller_email, seller_phoneNumber, seller_summary }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setPhoneNumber("");
            setSummary("");
        }
    }
    return ( <div>
        <h1> This is React WebApp </h1> 
        <form action = "" >
        <
        input type = "text"
        placeholder = "name"
        value = { seller_name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> <
        input type = "email"
        placeholder = "email"
        value = { seller_email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> <
        input type = "tel"
        placeholder = "tel"
        value = { seller_phoneNumber }
        onChange = {
            (e) => setPhoneNumber(e.target.value)
        }
        /> <
        input type = "string"
        placeholder = "string"
        value = { seller_summary }
        onChange = {
            (e) => setSummary(e.target.value)
        }
        /> <button type = "submit"
        onClick = { handleOnSubmit } > submit </button> 
        </form >
        </div>
    );
};

export default BaseEditOverview;