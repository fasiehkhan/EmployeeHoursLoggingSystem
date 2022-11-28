import Table from 'react-bootstrap/Table';

export const EmployeeHistory = () => {
    return (
        <div className="employee">
            <h1>Employee Dashboard</h1>
            <br></br>
            <p>Name: </p>
            <p>Employee ID: </p>
            <br></br>
            <div>
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
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    );
};