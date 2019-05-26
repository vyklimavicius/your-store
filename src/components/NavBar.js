import React from 'react';
import {Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';


class NavBar extends React.Component {

    render() {
        return (
            <div className="Nav-bar">
            <Navbar bg="dark" variant="dark" expand="lg">
            <img src="http://localhost:3000/buyMe.png" alt="Logo" />
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
                  <Nav.Link style={{ fontSize: '25px' }} href="#home">User</Nav.Link>
      <Nav.Link style={{fontSize:'25px'}} href="#link">Cart</Nav.Link>
      <NavDropdown style={{fontSize:'25px'}} title="Filter" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Fruit</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Meat</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Dairy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Pastry</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Badge style={{width:'200px', height:'100px', backgroundColor:'grey'}}variant="primary">
    <h1 style={{textAlign:'center', fontSize:'20px'}}>CREDIT</h1>
    <h2 style={{textAlign:'center'}}>$100</h2>
  </Badge>
  </Navbar.Collapse>
 </Navbar>
</div>)}
}

export default NavBar;
