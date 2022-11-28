import  React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export const EmployeeEndShift = () => {
    let navigate = useNavigate();
    const navigateBack = () => { 
        navigate(-1);
    };
    const navigateToLogoutPage = () => { 
        let path = `/logout`; 
        navigate(path);
    };
    var [curTime] = useState(new Date());
    const [dt, setDt] = useState(new Date().toLocaleString());
    useEffect(() => {
        let secTimer = setInterval( () => {
          setDt(new Date().toLocaleString())
        },1000)
        return () => clearInterval(secTimer);
    }, []);
    return (
        <div className="employee">
            <h1>Employee Dashboard</h1>
            <br></br>
            <p><strong>Name:</strong> </p>
            <p><strong>Employee ID:</strong> </p>
            <p><strong>Current Time:</strong> {dt}</p>
            <br></br><br></br>
            <div id="shift-break-container">
                <p id="detail-end">Ended shift at:</p>
                <p id="datetime-end">
                    <strong>Date: </strong> {curTime.toLocaleDateString()}
                    <br></br>
                    <strong>Time: </strong> {curTime.toLocaleTimeString()}
                </p>
                <br></br><br></br>
                <p id="trivial">Duration of shift:</p>
            </div>
            <div id="back">
                <Button id="back-btn" variant="light" onClick={navigateBack} size="sm">Back</Button>
                <Button id="logout-btn" variant="light" onClick={navigateToLogoutPage} size="sm">Logout</Button>
            </div>
        </div>
    );
};