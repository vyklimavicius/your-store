import React from 'react';
import {Navbar, Nav, NavDropdown, Badge, Image } from 'react-bootstrap';


class NavBar extends React.Component {

    state = {
      filter: null,
    }

    handleChange = (e) => {
      this.setState({
        filter: e
      }, () => this.props.handleFilter(this.state.filter))
    }

    handleLogout = (e) => {
      // console.log(e);
      if (e === "Logout"){
        console.log("pass");
        localStorage.clear('user');
        window.location.href = '/';
      }

      // localStorage.clear('user');
      // window.location.href = '/';
      
    }

    render() {

    let profile = {
     paddingTop: '-60px',
     marginBottom: '20px',
     marginLeft: '10px',
     border: '2px solid black',
     width: '100px',
     height: '100px'
    }

    const currentUser = this.props.currentUser.username;
    const image = this.props.currentUser.image;
    const email = this.props.currentUser.email;

    console.log(this.state.currentUser);
    
    
    return (
      <div className="Nav-bar">
      <Navbar bg="dark" variant="dark" expand="lg">
      <img src="http://localhost:3000/buyMe.png" alt="Logo" />
      <Image style={profile} src={image} roundedCircle/>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link style={{ fontSize: '25px' }} href="/" onClick={this.handleLogout}>{currentUser}</Nav.Link> */}
      {/*  */}
        <NavDropdown onSelect={this.handleLogout} style={{ fontSize: '25px' }} title={currentUser} id="basic-nav-dropdown">
        <NavDropdown.Item>Username: {currentUser}</NavDropdown.Item>
        <NavDropdown.Item>Email: {email}</NavDropdown.Item>
        <NavDropdown.Item eventKey="Logout">Logout</NavDropdown.Item>
      </NavDropdown>
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
