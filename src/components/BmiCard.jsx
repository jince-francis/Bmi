// import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function BmiCard({updateBmi}) {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    console.log(height);
    console.log(weight);
    const calculate = () => {
        let h = (height / 100)
        let newHeight = h * h
        const newBmi = weight / newHeight
        updateBmi(newBmi.toFixed(2))
    }

    return (
        <div style={{ width: "50%" }} >
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={height} onChange={(e) => { setHeight(e.target.value) }} type="text" placeholder="Enter height in cm" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control value={weight} onChange={(e) => { setWeight(e.target.value) }} type="text" placeholder="Enter weight in kg" />
                </Form.Group>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button variant="warning" type="button" onClick={calculate}>
                        <i className="fa-solid fa-arrow-right fa-xl" style={{ color: "#B197FC" }}></i>
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default BmiCard