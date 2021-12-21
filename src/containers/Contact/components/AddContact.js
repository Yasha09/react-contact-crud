import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout';

function AddContact(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.addContact({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
        navigate('/');
    };

    return (
        <Layout>
            <Container>
                <Form onSubmit={ submitForm }>
                    <Form.Group className="mb-3" name={ 'name' }>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Write Name" value={ name }
                                      onChange={ event => setName(event.target.value) } required/>
                    </Form.Group>
                    <Form.Group className="mb-3" name={ 'email' }>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={ email }
                                      onChange={ event => setEmail(event.target.value) } required/>
                    </Form.Group>
                    <Form.Group className="mb-3" name={ 'phone' }>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" value={ phone }
                                      onChange={ event => setPhone(event.target.value) } required/>
                    </Form.Group>
                    <Button variant="primary" size="lg" type={ 'submit' }>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Layout>
    );
}

export default AddContact;