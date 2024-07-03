import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaRegLightbulb } from "react-icons/fa6";
import pic1 from "../../assets/images/shutterstock_195507533-700x660.jpg";
import pic2 from "../../assets/images/articles2.jpg";
import pic3 from "../../assets/images/jungle.jpg";
import pic4 from "../../assets/images/suffering.jpeg";
import "./travelarticles.css";

const TravelArticles = () => {
  return (
    <>
      <Container fluid className="py-5">
        <Row>
          <Col className="d-flex justify-content-center algin-items-center">
            <h4 className="pe-3">
              <FaRegLightbulb />
            </h4>
            <h4>Travels Articles</h4>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card className="defaultProp defaultProp1">
              <Card.Img
                src={pic1}
                alt="Card image"
                className="hovermate"
              />
              <Card.ImgOverlay className="articledisply">
                <div className="displynone">
                  {" "}
                  <Card.Title style={{textAlign:"center",color:"white"}}>Map</Card.Title>
                  <Card.Text style={{textAlign:"center"}}>
                    How To Travel By Map And find the location in jungle
                  </Card.Text>
                  <Card.Text style={{textAlign:"center"}}>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <Image src={pic2} fluid></Image>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <Image src={pic3} fluid></Image>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <Image src={pic4} fluid></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TravelArticles;
