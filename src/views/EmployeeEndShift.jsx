import  React, { useState } from 'react';
//import { EmployeeStartShift } from './EmployeeStartShift';

export const EmployeeEndShift = () => {
    var [curTime] = useState(new Date());
    //var [duration] = curTime - startTime;
    return (
        <div className="employee">
            <h1>Employee Dashboard</h1>
            <br></br>
            <p>Name: </p>
            <p>Employee ID: </p>
            <br></br><br></br>
            <div>
                <p id="trivial">Ended shift at:</p>
                <p id="datetime">
                    <strong>Date: </strong> {curTime.toLocaleDateString()}
                    <br></br>
                    <strong>Time: </strong> {curTime.toLocaleTimeString()}
                </p>
                <br></br><br></br>
                <p id="trivial">Duration of shift:</p>
            </div>
        </div>
    );
};