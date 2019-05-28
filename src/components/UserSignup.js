import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';

class UserSignup extends React.Component {
    

    state = {
        username: "",
        password: "",
        email: "",
        image: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newUser = this.state;
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {user:newUser}
            )
        })
        // this.setState({
        //     username: "",
        //     password: "",
        //     email: "",
        //     image: "",
        // })
        this.props.history.push('/')
    }

    
    render() {

        let input = {
            border: 'none',
            borderBottom: '2px solid black',
            marginBottom: '20px'
        }

        let image = {
            paddingTop: '-60px',
            marginBottom: '20px',
            marginLeft: '20px'
        }

        let profile = {
            paddingTop: '-60px',
            marginBottom: '20px',
            marginLeft: '90px',
            border: '2px solid black',
            width: '100px',
            height: '100px'
        }

    return(
    <div>
    <div className="User-body">
    <Form id='user-form' onSubmit={this.handleSubmit}>
    <img style={image} src="http://localhost:3000/buyMe.png" alt="Logo" />
    <Image style={profile} src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png" roundedCircle/>
    <Form.Group controlId="formGroupUserName">
    <Form.Control style={input} type="text" size="lg" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange}/>
    <Form.Control style={input} type="password" size="lg" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
    <Form.Control style={input} type="email" size="lg" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
    <Form.Control style={input} type="url" size="lg" placeholder="ProfilePicUrl" value={this.state.image} name="image" onChange={this.handleChange} />
    </Form.Group>
                    <Button style={{ marginLeft: '30px', backgroundColor: 'gray', width: '300px', border: '1px solid black' }} variant="primary" type="submit" onClick={null} >Register!</Button>
    </Form>
    <div className="Signup-footer">
    <h4>©Copyright 2019</h4>
    </div>
    </div>
    </div>
    );
 }
}



export default UserSignup;