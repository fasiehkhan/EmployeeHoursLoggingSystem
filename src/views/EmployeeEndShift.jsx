import  React, { useState } from 'react';
//import { EmployeeStartShift } from './EmployeeStartShift';

export const EmployeeEndShift = () => {
    var [curTime] = useState(new Date());
    //var [duration] = curTime - startTime;
    return (
        <div className="employee">
            <h2>End Shift</h2>
            <h4>Name: </h4>
            <h4>Employee ID: </h4>
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