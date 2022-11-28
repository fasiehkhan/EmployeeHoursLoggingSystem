import  React, { useState } from 'react';

export const EmployeeStartBreak = () => {
    var [date] = useState(new Date());
    return (
        <div className="employee">
            <h2>Start Break</h2>
            <h4>Name: </h4>
            <h4>Employee ID: </h4>
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