import { Button, Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { MdMarkEmailRead } from "react-icons/md";
import './otp.css'
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container fluid className="p-0">
        <div className="bgimg">
          <Container className="d-flex justify-content-center align-items-center">
            <Row className="rowsize">
              <Col sm={12} md={6} lg={6} xl={6} className="p-0"><div className="formsection d-flex justify-content-center align-items-center flex-column">
                <span className="">  <MdMarkEmailRead className="mailIcon"/></span>
            
                <p className="text-muted mb-4">Please Check Your Email</p>
                <p className="text-muted mb-4">We Have sent a Otp to Xyz@gmail.com</p>

                <Form>
      <Row>
        <Col>
        <Form.Control type="number"  className="otp-letter-input" max={1}/>
        </Col>
        <Col>
        <Form.Control type="number" className="otp-letter-input" max={1}/>
        </Col>
        <Col>
        <Form.Control type="number" className="otp-letter-input" max={1}/>
        </Col>
        <Col>
        <Form.Control type="number" className="otp-letter-input" max={1}/>
        </Col>
        <p className="my-3 text-center">Didn't get the Otp? Click to Resend </p>
        <div className="d-flex justify-content-center align-items-center"><Button  type="submit" className="my-3 formbtn w-50" onClick={()=>{navigate('/adddetails')}}>Verify</Button></div>
        
     
      </Row>
      </Form>
    
    </div></Col>
              <Col sm={12} md={6} lg={6} xl={6} className="p-0"><div className="rightimg img-fluid"></div></Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  )
}

export default Otp
