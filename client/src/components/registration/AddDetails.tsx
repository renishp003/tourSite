import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './addDetails.css'

const AddDetails = () => {
    const navigate = useNavigate()
  return (
    <>
      <Container fluid className="p-0">
        <div className="bgimgadddetails">
          <Container className="d-flex justify-content-center align-items-center">
            <Row className="rowsize">
              <Col sm={12} md={6} lg={6} xl={6} className="p-0"><div className="formsection">
                <h3 className="mt-4 mb-2">ADD Details</h3>
                <p className="text-muted mb-4">WelCome To Expore World!</p>
                <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupfirstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Enter Firstname" />
      </Form.Group><Form.Group className="mb-3" controlId="formGrouplastname">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupmobile">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="number" placeholder="Enter MobileNo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button  type="submit" className="my-3 formbtn" onClick={()=>{navigate('/')}}>
      Submit
      </Button>
    </Form>

    </div></Col>
              <Col sm={12} md={6} lg={6} xl={6} className="p-0"><div className="rightimgadddetails img-fluid"></div></Col>
            </Row>
          </Container>
        </div>
      </Container>

    </>
  )
}

export default AddDetails
