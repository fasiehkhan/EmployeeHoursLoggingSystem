import { useNavigate } from "react-router-dom";

export const EmployeeTimePunches = () => {
    let navigate = useNavigate();
    const navigateToEmployeeRequest = () =>{ 
        let path = `/employee-request`; 
        navigate(path);
    };
    return (
        <div className="employee">
            <h2>Employee Time Punches</h2>
            <h4>Name: </h4>            
            <h4>User ID: </h4>
            <br></br><br></br>
            <div>
                <p>What would you like to do?</p>
                <button onClick={navigateToEmployeeRequest}>Start Shift</button> 
                <button onClick={navigateToEmployeeRequest}>End Shift</button>
                <br></br>
                <button onClick={navigateToEmployeeRequest}>Start Break</button>
                <button onClick={navigateToEmployeeRequest}>End Break</button>
            </div>
        </div>
    );
};