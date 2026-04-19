import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage, AdminHome, AdminLayout, ContactsPage, ErrorPage, HomePage, MainLayout, ManageCategories, ManageProducts, ProductsPage } from './demo07/pages';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}  >
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="product/:id/:name" element={<ProductsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} >
          <Route path="home" element={<AdminHome />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="categories" element={<ManageCategories />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
