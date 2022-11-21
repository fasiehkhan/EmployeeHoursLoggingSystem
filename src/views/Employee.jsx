import { useNavigate } from "react-router-dom";

export const Employee = () => {
    let navigate = useNavigate(); 
    const navigateToHistory = () =>{ 
        let path = `/employee-history`; 
        navigate(path);
    };
    const navigateToTimePunches = () =>{ 
        let path = `/employee-time-punches`; 
        navigate(path);
    };
    return (
        <div className="employee">
            <h2>Employee Dashboard</h2>
            <h4>Name: </h4>
            <h4>Employee ID: </h4>
            <br></br><br></br>
            <div>
                <p>What would you like to do?</p>
                <button onClick={navigateToHistory}>View History</button>
                <button onClick={navigateToTimePunches}>Time Punches</button>
            </div>
        </div>
    );
};