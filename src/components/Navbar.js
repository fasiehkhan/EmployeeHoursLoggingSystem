import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">TimeSheet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/employee">Employee</Nav.Link>
            <Nav.Link href="/manager">Manager</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbar1