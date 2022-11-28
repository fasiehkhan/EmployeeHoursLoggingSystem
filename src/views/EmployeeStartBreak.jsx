import  React, { useState } from 'react';

export const EmployeeStartBreak = () => {
    var [date] = useState(new Date());
    return (
        <div className="employee">
            <h1>Employee Dashboard</h1>
            <br></br>
            <p>Name: </p>
            <p>Employee ID: </p>
            <br></br><br></br>
            <div>
                <p id="trivial">Successfully started break at:</p>
                <p id="datetime">
                    <strong>Date: </strong> {date.toLocaleDateString()}
                    <br></br>
                    <strong>Time: </strong> {date.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
};