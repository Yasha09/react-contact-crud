import ContactList from '../Contact/ContactList';
import Layout from '../../components/Layout';

function Home(props) {
    return (
        <Layout>
            <ContactList
                contacts={ props.contacts }
                selectContact={ props.selectContact }
                deleteContact={ props.deleteContact }
                selectedContact={ props.selectedContact }
            />
        </Layout>
    );
}

export default Home;