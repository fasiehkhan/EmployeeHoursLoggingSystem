import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export const EmployeeHistory = () => {

    const handleAccepted = () => {
        console.log("Accepted")
    }

    const handleRejected = () => {
        console.log("Rejected")
    }

    const handleModify = () => {
        console.log("Modified")
    }


    return (
        <div className="manager">
            <h1>Employee History</h1>
            <p>Name: </p>
            <p>Employee ID: </p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Time (H)</th>
                        <th>Shift Type</th>
                        <th>Date (yyyy-mm-dd)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>2:00</td>
                        <td>10:00</td>
                        <td>8</td>
                        <td>Work</td>
                        <td>12/10/2022</td>
                        <td><Button variant="outline-success" onClick={handleAccepted}>Accept</Button>{' '}
                            <Button variant="outline-danger" onClick={handleRejected}>Reject</Button>{' '}
                            <Button variant="outline-primary" onClick={handleModify}>Modify</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};
