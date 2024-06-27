import { Col, Container, Row } from "react-bootstrap"
import './footer.css'

const FooterDown = () => {
  return (
    <>
     <Container fluid className="">
       <Row className="">
            <Col className="footercolor"><div className="d-flex justify-content-center algin-items-center my-4"> <p className="m-0"> © Copyright Expore World . All Rights Reserved</p> </div></Col>
       </Row>

     </Container>
    </>
  )
}

export default FooterDown
