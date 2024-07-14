import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './addDetails.css'
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import Swal from "sweetalert2"
// import { addDetailsThunk } from "../../store/user/user.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addDetails } from "../../store/user/apiService"

const AddDetails = () => {
  const userState = useSelector((state:RootState)=>state.user)
  console.log(userState)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
   const [details, setDetails] = useState({
    email:localStorage.getItem('email'),
    password:'',
    mobile:0,
    FirstName:"",
    LastName:"",
   })

   const handleAddDetails=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(details.LastName===''){
      alert("ples")
      return false
    }
    // dispatch(addDetailsThunk(details))
navigate('/')
localStorage.removeItem('email')
    
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <Container fluid className="p-0">
        <div className="bgimgadddetails">
          <Container className="d-flex justify-content-center align-items-center">
            <Row className="rowsize">
              <Col sm={12} md={6} lg={6} xl={6} className="p-0"><div className="formsection">
                <h3 className="mt-4 mb-2">ADD Details</h3>
                <p className="text-muted mb-4">WelCome To Expore World!</p>
                <Form onSubmit={handleAddDetails}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" readOnly name="email"  value={details.email}
        onChange={handleChange} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupfirstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" name="FirstName"
        value={details.FirstName}
        onChange={handleChange} placeholder="Enter Firstname" />
      </Form.Group><Form.Group className="mb-3" controlId="formGrouplastname">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text"  name="LastName"
        value={details.LastName}
        onChange={handleChange} placeholder="Enter Lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupmobile">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="number"  name="mobile"
        value={details.mobile}
        onChange={handleChange} placeholder="Enter MobileNo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={details.password}
        onChange={handleChange}
        placeholder="Password" />
      </Form.Group>
      <Button  type="submit" className="my-3 formbtn">
      Submit
      </Button>
      {userState.status === 'loading' && <p>Loading...</p>}
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
