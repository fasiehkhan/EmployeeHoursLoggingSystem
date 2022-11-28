import  React, { useState } from 'react';

export const EmployeeEndBreak = () => {
    var [date] = useState(new Date());
    return (
        <div className="employee">
            <h2>End Break</h2>
            <h4>Name: </h4>
            <h4>Employee ID: </h4>
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
        </div>
    );
};