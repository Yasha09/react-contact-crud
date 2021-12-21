import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Contact(props) {
    const { contact, index } = props;
    const navigate = useNavigate();

    const handleSelectEdit = () => {
        props.selectContact(contact.id);
    };
    const handleDelete = () => {
        const res = window.confirm(`If you want delete ${ contact.name }?`);
        if (res) {
            props.deleteContact(contact);
        }
        navigate('/');
    };
    return (
        <tbody>
            <tr>
                <td>{ index }</td>
                <td>{ contact.name }</td>
                <td>{ contact.phone }</td>
                <td>{ contact.email }</td>
                <td>
                    <Link to={ `/contact/edit/${ contact.id }` }>
                        <Button variant="primary" onClick={ handleSelectEdit }>Edit</Button>
                    </Link>
                    <Button variant="danger" onClick={ handleDelete } style={ { marginLeft: '1rem' } }>Delete</Button>
                </td>
            </tr>
        </tbody>
    );
}

export default Contact;