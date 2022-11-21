import { useNavigate } from "react-router-dom";
import { React } from "react";

export const EmployeeTimePunches = () => {
    let navigate = useNavigate();
    const navigateToStartShift = () => { 
        let path = `/employee-start-shift`; 
        navigate(path);
    };
    const navigateToEndShift = () => { 
        let path = `/employee-end-shift`; 
        navigate(path);
    };
    const navigateToStartBreak = () => { 
        let path = `/employee-start-break`; 
        navigate(path);
    };
    const navigateToEndBreak = () => { 
        let path = `/employee-end-break`; 
        navigate(path);
    };
    return (
        <div className="employee">
            <h2>Employee Time Punches</h2>
            <h4>Name: </h4>            
            <h4>Employee ID: </h4>
            <br></br><br></br>
            <div>
                <p>What would you like to do?</p>
                <button onClick={navigateToStartShift}>Start Shift</button> 
                <button onClick={navigateToEndShift}>End Shift</button>
                <br></br>
                <button onClick={navigateToStartBreak}>Start Break</button>
                <button onClick={navigateToEndBreak}>End Break</button>
            </div>
        </div>
    )
};