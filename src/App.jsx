import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Demo01 from './demo08/demo01'
import Demo03 from './demo08/demo03'
import Demo02 from './demo08/demo02'
import Demo04 from './demo08/demo04'

function App() {

  return (
    <>
      <Container>
          <Row className='my-3' >
              <Col className='col-3'>
                  <Demo01  />
              </Col> 
              <Col className='col-3'>
                  <Demo04 />
              </Col> 
              <Col className='col-3'>
                  <Demo03  />
              </Col> 
              <Col className='col-3'>
                 <Demo02 />
              </Col> 
          </Row>        
      </Container>
    </>
  )
}

export default App
