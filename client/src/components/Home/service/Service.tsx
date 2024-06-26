import { Col, Container, Row } from "react-bootstrap";
import "./service.css";
import {
  FaCalendarDays,
  FaMapLocationDot,
  FaSackDollar,
} from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center"
        
      >
        <Row className="rowSize py-5">
          <Col sm={12} md={6} lg={6} xl={3} className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            <span className="roundshape">  <FaMapLocationDot className="iconformt" /></span>

              <h5 className="capcolor">500+ Destinations</h5>
              <p className="contentColor ">
                Here 500+ Destinations are availabe for exploring
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3} className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            <span className="roundshape"> <FaSackDollar className="iconformt" /></span>

              <h5 className="capcolor">Best Price In The Industry</h5>
              <p className="contentColor">
                We have best packages and budget friendly offers
              </p>
            </div>
          </Col>{" "}
          <Col sm={12} md={6} lg={6} xl={3} className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            <span className="roundshape"><RiCustomerService2Fill className="iconformt" /></span>

              <h5 className="capcolor">Great Customer Support</h5>
              <p className="contentColor">
                Here you can get full customer support&Service 24/7
              </p>
            </div>
          </Col>{" "}
          <Col sm={12} md={6} lg={6} xl={3} className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            <span className="roundshape"> <FaCalendarDays className="iconformt" /></span>

              <h5 className="capcolor">Super Fast Booking</h5>
              <p className="contentColor">
                your wish of wonder the world can fullfish here with superfast
                booking
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
