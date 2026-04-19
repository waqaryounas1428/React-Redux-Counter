import { Col, Container, Row, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useParams, Link } from "react-router-dom";




export function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Contents of home page here</p>
        </>
    );
}

export function ContactsPage() {
    return (
        <>
            <h1>Contacts Page</h1>
            <p>Contents of contact page here</p>
        </>
    );
}


export function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <p>Contents of about page here</p>
        </>
    );
}

export function ProductsPage() {
    const { id, name } = useParams();
    return (
        <>
            <h1>Product {name}</h1>
            <p>Contents of product {name} with id:{id} here</p>
        </>
    );
}

export function ErrorPage() {
    return (
        <>
            <h1>Error Page</h1>
            <p>Contents of error page here</p>
        </>
    );
}




export function MainLayout() {
    const products = [
        { id: 1, name: "iPhone Pro 16" },
        { id: 2, name: "Samsung Glaxy S20" },
        { id: 3, name: "Samsung Z-Fold" }
    ];

    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to="/home" className='text-body text-decoration-none' ><FontAwesomeIcon icon="fas fa-tags" /> RoutingDemo </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/home" className='nav-link' > <FontAwesomeIcon icon="fas fa-home" /> Home </Link>
                                <NavDropdown title="Products" id="basic-nav-dropdown">
                                    {
                                        products.map(p =>
                                            <Link to={`/product/${p.id}/${p.name}`} className='dropdown-item' > <FontAwesomeIcon icon="fas fa-arrow-circle-right" /> {p.name} </Link>
                                        )
                                    }
                                </NavDropdown>
                                <Link to="/about" className='nav-link' > <FontAwesomeIcon icon="fas fa-building" /> About </Link>
                                <Link to="/contacts" className='nav-link' > <FontAwesomeIcon icon="fas fa-address-card" /> Contaccts</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Container fluid as="main">
                <Outlet />
            </Container>

            <Container fluid as="footer">
                Page Footer here
            </Container>
        </>
    )
}



export function AdminLayout() {
    return (
        <>
            <Row>
                <Col className="col-3 bg-dark text-light">
                    Admin Navbar
                </Col>
                <Col className="col">
                    <Outlet />
                </Col>
            </Row>
        </>
    )
}




export function AdminHome() {
    return (
        <>
            <h1>Admin Dashboard</h1>
            <p>Contents of admin dashboard here</p>
        </>
    );
}


export function ManageProducts() {
    return (
        <>
            <h1>Manage Products</h1>
            <p>Contents of manage products page here</p>
        </>
    );
}


export function ManageCategories() {
    return (
        <>
            <h1>Manage Categories</h1>
            <p>Contents of manage categories page here</p>
        </>
    );
}




