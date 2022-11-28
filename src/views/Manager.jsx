import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export const Manager = () => {

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
            <h1>Manager Dashboard</h1>
            <p>Name: </p>
            <p>Manager ID: </p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Time (H)</th>
                        <th>Date (mm/dd/yyyy)</th>
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
