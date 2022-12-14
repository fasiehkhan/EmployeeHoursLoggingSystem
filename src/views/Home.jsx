import { useNavigate } from "react-router-dom";
//import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export const Home = () => {
    let navigate = useNavigate();
    const navigateToManager = () => { 
        let path = `/manager`; 
        navigate(path);
    };
    const navigateToEmployee = () => { 
        let path = `/employee`; 
        navigate(path);
    };

    return (

        <div className="home">
            <h1>Welcome to TimeSheet</h1>
            <hr></hr>
            <p id="top">A clock-in clock-out system for employees and managers alike. <br></br>Keep track of all your shifts and breaks with the click of a button.</p>
            <div id="home-container">
                <div id="home-manager">
                    <h4>Managers</h4>
                    <p>
                        <li>View past history of employees</li>
                        <li>Accept, reject, or modify breaks & shifts</li>
                    </p>
                    <div id="b">
                        <Button id="man-dash-btn" variant="outline-light" onClick={navigateToManager} size="md">Go to Manager Dashboard</Button>
                    </div>
                </div>
                <div id="home-employee">
                    <h4>Employees</h4>
                    <p>
                        <li>View past clocking-in/clocking-out history</li>
                        <li>Clock in/out for work shifts and breaks</li>
                    </p>
                    <div id="b">
                        <Button id="emp-dash-btn" variant="outline-light" onClick={navigateToEmployee} size="md">Go to Employee Dashboard</Button>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}