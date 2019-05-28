import React from 'react';
import { Form, Button } from 'react-bootstrap';


class UserForm extends React.Component {

  state = {
    username: "",
    password: "",
    currentUser: null,
  }

  // methods 

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let logUser = this.state;
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {autho:logUser}
      )
    }).then(resp => resp.json())
    .then(user => {
      console.log(user)
      if (user.errors){
        alert(user.errors)
      } else {
        this.setState({
          currentUser: user
        })
        localStorage.setItem("user", JSON.stringify(this.state.currentUser))
        window.location.href = '/home'
      }
    })
  }

  render(){

  let input = {
    border: 'none',
    borderBottom: '2px solid black',
    marginBottom: '20px'
  }

  let image = {
    paddingTop: '-60px',
    marginBottom: '20px',
    marginLeft: '120px'
  }

  return (
    <div className="User-body">
    <Form id='user-form' onSubmit={this.handleSubmit}>
    <img style={image} src="http://localhost:3000/buyMe.png" alt="Logo" />
    <Form.Group controlId="formGroupUserName">
    <Form.Control style={input} type="text" size="lg" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} required/>
    <Form.Control style={input} type="password" size="lg" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} required/>
    </Form.Group>
    <Button style={{marginLeft: '30px', backgroundColor: 'gray', width: '300px', border: '1px solid black'}} variant="primary" type="submit" onClick={null} >Submit</Button>
    <br></br>
    <br></br>
    <a style={{marginLeft: '90px', color: 'black'}} href="/signup">Not a member?</a>
    </Form>
    <div className="footer">
        <h4>©Copyright 2019</h4>
    </div>
    </div>
  )
}}

export default UserForm;
