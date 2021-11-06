import React from "react";
import {useFormik} from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	const regExpEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
	const formik =  useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: values => {
			alert('Login Successful');
		},
		validate: values => {
			let errors = {};
			if(!values.email) errors.email = 'Field required';
			if(!values.password) errors.password = 'Field required';
			if(!regExpEmail.test(values.email)) errors.email = 'Username should be an email';
			return errors;
		}
	});
	return (
	<Container>
		<Row>
			<Col md={{ span: 4, offset: 4 }}>
				<Form onSubmit={formik.handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name='email'
							type="text"
							placeholder="Enter email"
							value={formik.values.email}
							onChange={formik.handleChange}/>
						{formik.errors.email ? <Alert variant='danger'>{formik.errors.email}</Alert>: null}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Password</Form.Label>
						<Form.Control
							name='password'
							type="password"
							placeholder="Enter password"
							value={formik.values.password}
							onChange={formik.handleChange}/>
					</Form.Group>
					{formik.errors.password ? <Alert variant='danger'>{formik.errors.password}</Alert>: null}
					<Button variant="primary" type="submit">Submit</Button>
				</Form>
			</Col>
		</Row>
	</Container>
  );
}
export default App;
