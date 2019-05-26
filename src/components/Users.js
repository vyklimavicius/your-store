import React from 'react';
import UserForm from './UserForm'
import {Button} from 'react-bootstrap';


class Users extends React.Component {

  state = {
    users: [],
    newUser: "",
    currentUser: "",
    test: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then( response => response.json())
    .then( users => {
      this.setState({
        users: users
      })
    })
  }

  componentDidUpdate(){
    this.render()
  }

  handleSubmit = (e) => {

    e.preventDefault();
    let user = {
      name: this.state.newUser
    }

    fetch('http://localhost:3000/users', {

      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body : JSON.stringify(user)
    })
    .then( () => {
    fetch('http://localhost:3000/users')
    .then( response => response.json())
    .then( users => {
      this.setState({
        users: users
      })
    })})

  }



  handleChange = (e) => {
    
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleClick = (e) => {
    let currentUser = e.target.innerText
    this.setState({
      currentUser: currentUser
    })
  }

  handleChangeCurrentUser = () => {
    let currentUser = ""
    this.setState({
      currentUser: currentUser
    })
  }

  render(){

    let ul = {
      fontSize: '26px',
      color: 'white',
      position: 'fixed',
      top: '0',
      marginLeft: '1300px'
    }

    let h1 = {
      color: 'white',
      position: 'fixed',
      marginLeft: '500px'
    }

    let button = {
      color: 'white',
      position: 'fixed',
      marginLeft: '500px',
      marginTop: '80px'
    }


  return (
    <div>
    <ul style={ul}>List of users:
    {this.state.users.map( user => {
      return(
      <li><a href="#" onClick={this.handleClick}>{user.name}</a></li>)
    })}
    </ul>
    <h1 style={h1}>Current user: {this.state.currentUser}</h1>
    <Button style={button} variant="secondary" size="lg" onClick={this.handleChangeCurrentUser}>No User</Button>
    <UserForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newUser={this.state.newUser} test={this.state.test}/>
    </div>
  )
}
}

export default Users;
