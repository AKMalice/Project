import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

function SignIn() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <p>                    </p>
    <Card style={{ width: '60rem' , padding:'1cm' , display:'flex', marginTop:'2cm', margin:'auto' }}>
   <div >
   <h3 style={{marginBottom:'1cm'}}>Sign In</h3>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">
        <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        
       
        <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please enter your password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" >
      <div className='d-flex justify-content-center'>
      <Form.Check 
            type="checkbox"
            label ="Remember Me"
          />
        </div>
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
    </div>
    </Card>
    </>
  );
}
export default SignIn;