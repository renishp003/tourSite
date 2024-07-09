import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { addUserThunk } from "../../store/user/user.slice";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
const Registration = () => {
  const userState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setemail] = useState("");
  console.log(email);

  const handleAddUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(addUserThunk(email));
    if (email) {
      navigate("/otpverify");
    }
  };
  return (
    <>
      <Container fluid className="p-0">
        <div className="bgimg">
          <Container className="d-flex justify-content-center align-items-center">
            <Row className="rowsize">
              <Col sm={12} md={6} lg={6} xl={6} className="p-0">
                <div className="formsection">
                  <h3 className="mt-4 mb-2">SIGNUP</h3>
                  <p className="text-muted mb-4">WelCome To Expore World!</p>
                  <Form onSubmit={handleAddUser}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
                    <Button
                      type="submit"
                      //  onClick={()=>{navigate('/otpverify')}}
                      className="my-3 formbtn"
                    >
                      Send Otp
                    </Button>
                  </Form>
                  <p className="my-3">
                    Already Have An Account?{" "}
                    <Link to="/login" className="linktg">
                      SignIn
                    </Link>{" "}
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6} className="p-0">
                <div className="rightimgregi"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Registration;
