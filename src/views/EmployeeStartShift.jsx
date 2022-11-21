import  React, { useState } from 'react';

export const EmployeeStartShift = () => {
    var [date] = useState(new Date());
    return (
        <div className="employee">
            <h2>Start Shift</h2>
            <h4>Name: </h4>
            <h4>Employee ID: </h4>
            <br></br><br></br>
            <div>
                <p id="trivial">Started shift at:</p>
                <p id="datetime">
                    <strong>Date: </strong> {date.toLocaleDateString()}
                    <br></br>
                    <strong>Time: </strong> {date.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
};
