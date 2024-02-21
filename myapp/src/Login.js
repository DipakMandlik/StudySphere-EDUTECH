import React from 'react'
import './external.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div>
        <div className='login'>
            <h1>Login</h1>
                <div className='form'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className='formlabel'>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className='formlabel'>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="light">Login</Button>{' '}
                    </Form>
                </div>
            </div>
    </div>
  )
}

export default Login