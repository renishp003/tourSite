import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import bgimg2 from "../../assets/images/bgimg2.jpg";
import { MdCall, MdEmail } from "react-icons/md";
import "./contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const ContactUs = () => {
  return (
    <>
      <Card className="text-white m-0 defaultProp">
        <Card.Img
          src={bgimg2}
          alt="Card image"
          className="bgimgforall p-0 m-0"
        />
        <Card.ImgOverlay>
          <Card.Title className="titleforrmat">Contact us</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Container className="p-5">
        <Row className="d-flex justify-content-center gy-4">
          <Col>
            <div className="d-flex justify-content-center align-items-center flex-column seccontactdiv p-4">
              <MdCall className="contcticon mb-5" />
              <h3 className="contcthed">Phone</h3>
              <p className="text-center px-5 contctp">
                A wonderful serenity has taken <br /> possession of my entire
                soul, like these.
              </p>
              <p>+91 9265960603</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center flex-column seccontactdiv p-4">
              <MdEmail className="contcticon mb-5" />

              <h3 className="contcthed">Email</h3>
              <p className="text-center px-5 contctp">
                A wonderful serenity has taken <br /> possession of my entire
                soul, like these.
              </p>
              <p>exporeworld@gmail.com</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center flex-column seccontactdiv p-4">
              <FaLocationArrow className="contcticon mb-5" />
              <h3 className="contcthed">Location</h3>
              <p className="text-center px-5 contctp">
                A wonderful serenity has taken <br /> possession of my entire
                soul, like these.
              </p>
              <p>View on Goggle map</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="">
        <Row>
          <Col className="d-flex justify-content-center align-items-center flex-column mt-4">
            <h3 className="contcthed pb-3" style={{borderBottom:"2px solid #ff681a"}}>Leave us your info</h3>
            <h5 className="contctp">and we will get back to you.</h5>
          </Col>
        </Row>
      </Container>
      <Container fluid className=" py-5">
        <Container>
          <Row className="gy-4">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
              <Form className="w-100 frmbgc formbgcolor p-5">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className="mb-3"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    className="mb-3"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter Subject"
                    className="mb-3"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={2} className="mb-3" />
                </Form.Group>

                <div className="d-flex justify-content-center align-items-center">
                  <Button className="frombtn" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} >
              <iframe className="formbgcolor"
                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.629821202937!2d72.83752657508606!3d21.206859480487466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04efbd2f1710d%3A0xf312ef8fb400d605!2sLal%20Darwaja%20Station%20Rd%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719467836993!5m2!1sen!2sin"
                width="100%"
                height="520"
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="my-3">
        <Row>
          <Col className="d-flex justify-content-center">
            <span className="spanformt">
              <FaInstagram className="extraiconclr" />
            </span>
            <span className="spanformt">
              <FaFacebook className="extraiconclr" />
            </span>
            <span className="spanformt">
              <FaXTwitter className="extraiconclr" />
            </span>
            <span className="spanformt">
              <FaWhatsapp className="extraiconclr" />
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
