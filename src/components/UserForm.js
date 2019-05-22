import React from 'react';
import { Form, Button } from 'react-bootstrap';


const UserForm = (props) => {



  return (
    <div className="User-form">
    <Form id='user-form'>
    <Form.Group controlId="formGroupUserName">
    <Form.Label>Create a User:</Form.Label>
    <Form.Control type="text" placeholder="Enter name" size="lg" value={props.newUser} name="newUser" onChange={props.handleChange} />
    <Form.Control type="text" placeholder="Enter a Lastname" size="lg" value={props.test} name="test" onChange={props.handleChange} />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={props.handleSubmit} >Submit</Button>
    </Form>
    </div>
  )
}

export default UserForm;
