import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { React, useState, useEffect } from 'react';


function Navbar1() {
  const [homePage, setHomePage] = useState(false)
  const [employeePage, setEmployeePage] = useState(false)
  const [managerPage, setManagerPage] = useState(false)
  const [logoutPage, setLogoutPage] = useState(false)


  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">TimeSheet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/home" disabled={homePage}>Home</Nav.Link>
            <Nav.Link href="/employee"disabled={employeePage} >Employee</Nav.Link>
            <Nav.Link href="/manager" disabled={managerPage} >Manager</Nav.Link>
            <Nav.Link href="/logout" disabled={logoutPage} >Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbar1