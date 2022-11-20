import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
  return (  
<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">TimeSheet</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/employee">Employee</Nav.Link>
    <Nav.Link href="/manager">Manager</Nav.Link>
  </Nav>
</Container>
</Navbar>
    
  );
}
 
export default Navbar1;