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
      <Container fluid className="d-flex justify-content-center" style={{backgroundColor:"#e7f9f9"}}>
        <Row className="rowSize py-3">
          <Col  className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            
                <FaMapLocationDot  className="iconformt"/>
              
              <h5 className="capcolor">500+ Destinations</h5>
              <p className="contentColor">Here 500+ Destinations are availabe for exploring</p>
            </div>
          </Col>
          <Col className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            
                <FaSackDollar  className="iconformt"/>
              
              <h5 className="capcolor">Best Price In The Industry</h5>
              <p className="contentColor">We have best packages and budget friendly offers</p>
            </div>
          </Col> <Col className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            
                <RiCustomerService2Fill className="iconformt" />
              
              <h5 className="capcolor">Great Customer Support</h5>
              <p className="contentColor">Here you can get full customer support 24/7</p>
            </div>
          </Col> <Col className="colmiddle">
            <div className="colmiddle flex-column align-items-center">
            
                <FaCalendarDays  className="iconformt"/>
              
              <h5 className="capcolor">Super Fast Booking</h5>
              <p className="contentColor">your wish of wonder the world can fullfish here with superfast booking</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
