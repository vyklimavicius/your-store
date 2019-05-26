import React from 'react';
import {Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';


class NavBar extends React.Component {

    state = {
      filter: null,
    }

    handleChange = (e) => {
      this.setState({
        filter: e
      }, () => this.props.handleFilter(this.state.filter))
    }

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
      <NavDropdown onSelect={this.handleChange} style={{fontSize:'25px'}} title="Filter" id="basic-nav-dropdown">
        <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
        <NavDropdown.Item eventKey="Fruit">Fruit</NavDropdown.Item>
        <NavDropdown.Item eventKey="Meat">Meat</NavDropdown.Item>
        <NavDropdown.Item eventKey="Dairy">Dairy</NavDropdown.Item>
        <NavDropdown.Item eventKey="Pastry">Pastry</NavDropdown.Item>
        <NavDropdown.Item eventKey="Home Goods">Home Goods</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Badge style={{width:'200px', height:'100px', backgroundColor:'grey'}}variant="primary">
    <h1 style={{textAlign:'center', fontSize:'20px'}}>CREDIT</h1>
    <h2 style={{textAlign:'center'}}>${this.props.credit}</h2>
  </Badge>
  </Navbar.Collapse>
 </Navbar>
</div>)}
}

export default NavBar;
