import { Card, Col, Container, Image, Row } from "react-bootstrap";
import bgimg2 from "../../assets/images/bgimg2.jpg";
import abtimg from "../../assets/images/shutterstock_220323652-700x660.jpg";
import "./about.css";
import { FaMapLocationDot, FaSackDollar, FaStar } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import review1 from "../../assets/images/review-2.jpg";
import review2 from "../../assets/images/review-1.jpg";

import { FaStarHalfAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Card className="text-white m-0">
        <Card.Img
          src={bgimg2}
          alt="Card image"
          className="bgimgforall p-0 m-0"
        />
        <Card.ImgOverlay>
          <Card.Title className="titleforrmat">AboutUs</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={12} lg={6} xl={6}>
            <div>
              <Image src={abtimg} fluid rounded className="leftimg" />
            </div>
          </Col>
          <Col className="mt-5" sm={12} md={12} lg={6} xl={6}>
            <div>
              <h4>Why Choose us?</h4>
              <p>
                Expore World aims to provide its travelers with a
                “one-stop-shop” for their next great travel adventure. From
                thoughtfully selected tours and itineraries, to expert travel
                advice from our travel team available 24-hours a day, 7-days a
                week.We travel the world and constantly look for new and unique
                destinations in order to provide our guests memorable
                experiences that last a lifetime.
              </p>
              <div className="container">
                <div className="row gy-3">
                  <div className=" col-12 col-lg-4">
                    <div className="sec3">
                      <FaMapLocationDot className="fs-1 abticon" />
                      <p className="">Best Tours</p>
                    </div>
                  </div>
                  <div className=" col-12 col-lg-4">
                    <div className="sec3">
                      <FaSackDollar className="fs-1 abticon" />
                      <p className="">Affrodable Prices</p>
                    </div>
                  </div>

                  <div className="col-12  col-lg-4">
                    <div className="sec3">
                      <RiCustomerService2Fill className="fs-1 abticon" />
                      <p className="">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5">
        <Row className="py-5 statsec gy-3">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3>687+</h3>
              <p>Total tours</p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3>1786+</h3>
              <p>Happy Tourist</p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3>1440+</h3>
              <p>Travellers</p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3>1110+</h3>
              <p>Blogs</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h3>Customer Review</h3>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="d-flex justify-content-center gy-3">
        <Col sm={12} md={6} lg={4} xl={4} className="d-flex justify-content-center">
            <div className="reviewsection p-5">
              {" "}
              <Image
                src={review1}
                className="imgsizeabtrivw"
                roundedCircle
                fluid
              />
              <h5 className="mt-3 typetourist">Tourist</h5>
              <h3 className="touristnameh5">Jessica Wood
              </h3>
              <div className="mb-3 rvwiconcolor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
             
              </div>
              <p className="text-center reviwcontentcolor">it’s been a great experience. Special thanks to Expore World for extreme support. I have booked 5D/4N trip to Kerala. Entire trip was smooth without having any trouble. Highly recommended..</p>
            </div>
          </Col>
          <Col  sm={12} md={6} lg={4} xl={4} className="d-flex justify-content-center">
            <div className="reviewsection p-5">
              {" "}
              <Image
                src={review2}
                className="imgsizeabtrivw"
                roundedCircle
                fluid
              />
              <h5 className="mt-3 typetourist">Tourist</h5>
              <h3 className="touristnameh5">Mark taylor</h3>
              <div className="mb-3 rvwiconcolor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              </div>
              <p className="text-center reviwcontentcolor">
              Overall experience is fantastic, Special thanks to the team they splendid manage the trip. Our trip to Darjeeling was memorable. Guides from Expore World travels were very helpful</p>
            </div>
          </Col>
          <Col  sm={12} md={6} lg={4} xl={4} className="d-flex justify-content-center">
            <div className="reviewsection p-5">
              {" "}
              <Image
                src={review1}
                className="imgsizeabtrivw"
                roundedCircle
                fluid
              />
              <h5 className="mt-3 typetourist">Tourist</h5>
              <h3 className="touristnameh5">Sonali Mishra</h3>
              <div className="mb-3 rvwiconcolor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              </div>
              <p className="text-center reviwcontentcolor">Expore World is too good at customizing package based on your requirements. It was a flawless trip organized by Expore World. Thank you Expore World holidays for your support during our stay at Maldives.!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
