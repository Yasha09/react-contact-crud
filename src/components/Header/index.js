import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Index() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
            </Container>
            <Button variant="success" size="lg">
                <Link to={ '/contacts/new' } style={{ textDecoration: 'none' , color:'white' } }>Add Contact</Link>
            </Button>
        </Navbar>
    );
}

export default Index;