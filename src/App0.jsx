import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage, ContactsPage, ErrorPage, HomePage, ProductsPage } from './demo07/pages';

function App() {
  const products = [
    { Id: 1, Name: "Aaaa" },
    { Id: 2, Name: "Bbbb" },
    { Id: 3, Name: "Cccc" },
    { Id: 4, Name: "Dddd" },
    { Id: 5, Name: "Eeee" }
  ]


  return (
    <>
      <Container fluid as="main" >
        {/* <div className="p-3 bg-dark text-white">
          <a href="/home">Home</a> | <a href="/contacts">Contacts</a> | <a href="/about">About</a>
        </div> */}
        <div>
          <Link to="/home" > Home </Link>  |
          {
             products.map(p=> <span> <Link to={`/product/${p.Id}/${p.Name}`} > {p.Name} </Link> | </span> )
          }
          <Link to="/contacts"> Contacts </Link> |
          <Link to="/about"> About </Link>
        </div>
      </Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id/:name" element={<ProductsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
