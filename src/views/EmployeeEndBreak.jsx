import  React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export const EmployeeEndBreak = () => {
    let navigate = useNavigate();
    const navigateBack = () => { 
        navigate(-1);
    };
    var [date] = useState(new Date());
    return (
        <div className="employee">
            <h1>Employee Dashboard</h1>
            <br></br>
            <p>Name: </p>
            <p>Employee ID: </p>
            <br></br><br></br>
            <div>
                <p id="trivial">Successfully ended break at:</p>
                <p id="datetime">
                    <strong>Date: </strong> {date.toLocaleDateString()}
                    <br></br>
                    <strong>Time: </strong> {date.toLocaleTimeString()}
                </p>
                <br></br><br></br>
                <p id="trivial">Duration of break:</p>
            </div>
            <div id="back">
                <Button id="back-btn" variant="light" onClick={navigateBack} size="sm">Back</Button>
            </div>
        </div>
    );
};