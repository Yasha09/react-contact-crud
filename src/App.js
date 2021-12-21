import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import { useEffect, useState } from 'react';
import AddContact from './containers/Contact/components/AddContact';
import EditContact from './containers/Contact/components/EditContact';

const baseURL = 'http://localhost:4000/api/contacts';


function App() {
    const [contactsData, setContactsData] = useState([]);
    const [contact, setContact] = useState({});

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        await fetch(baseURL)
            .then(res => res.json())
            .then(data => setContactsData(data));
    };

    const addContact = async (contact) => {
        const { name, phone, email } = contact;
        await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone }),
        });
        await fetchContacts();
    };

    const editContact = async (contact) => {
        const { name, phone, email, id } = contact;
        await fetch(`${ baseURL }/${ id }`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone }),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    fetchContacts();
                }
            });

    };
    const deleteContact = async (contact) => {
        await fetch(`${ baseURL }/${ contact.id }`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    fetchContacts();
                }
            });
    };
    const selectContact = (contactId) => {
        const selectedContact = contactsData.find((cont) => cont.id === contactId);
        setContact(selectedContact);
    };


    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={ '/' }
                           element={ <Home contacts={ contactsData }
                                           selectContact={ selectContact }
                                           selectedContact={ contact }
                                           deleteContact={ deleteContact }
                           /> }/>
                    <Route path={ '/contacts/new' }
                           element={ <AddContact addContact={ addContact }/> }/>
                    <Route path={ `/contact/edit/:${ contact.id }` }
                           element={ <EditContact selectedContact={ contact } editContact={ editContact }/> }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
