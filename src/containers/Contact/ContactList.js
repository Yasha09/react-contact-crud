import Contact from './Contact';
import { Table } from 'react-bootstrap';

function ContactList(props) {
    return (
        <div>
            <h1>Contacts</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
                </thead>
                {
                    props.contacts.map((contact, index) => {
                        return <Contact
                            contact={ contact }
                            key={ contact.id }
                            index={ index + 1 }
                            selectContact={ props.selectContact }
                            deleteContact={ props.deleteContact }
                            selectedContact={ props.selectedContact }
                        />;
                    })
                }
            </Table>
        </div>
    );
}

export default ContactList;