import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout';

function EditContact(props) {
    const navigate = useNavigate();
    const { name, email, phone, id } = props.selectedContact;
    const [nameEdit, setNameEdit] = useState(name);
    const [emailEdit, setEmailEdit] = useState(email);
    const [phoneEdit, setPhoneEdit] = useState(phone);


    const submitForm = (e) => {
        e.preventDefault();
        props.editContact({ name: nameEdit, email: emailEdit, phone: phoneEdit, id });
        setNameEdit('');
        setEmailEdit('');
        setPhoneEdit('');
        navigate('/');
    };

    return (
        <Layout>
            <Container>
                <Form onSubmit={ submitForm }>
                    <Form.Group className="mb-3" name={ 'name' }>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Write Name" value={ nameEdit }
                                      onChange={ event => setNameEdit(event.target.value) } required/>
                    </Form.Group>
                    <Form.Group className="mb-3" name={ 'email' }>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={ emailEdit }
                                      onChange={ event => setEmailEdit(event.target.value) } required/>
                    </Form.Group>
                    <Form.Group className="mb-3" name={ 'phone' }>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" value={ phoneEdit }
                                      onChange={ event => setPhoneEdit(event.target.value) } required/>
                    </Form.Group>
                    <Button variant="primary" size="lg" type={ 'submit' }>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Layout>
    );
}

export default EditContact;