// import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../about/About";
import Destinations from "../destinations/Destinations";
import TourPackage from "../tourpackages/TourPackage";
import ContactUs from "../contact/ContactUs";
import Loginp from "../login/Loginp";
import Registration from "../registration/Registration";
import MasterPage from "../masterpage/MasterPage";
import UpHeader from "../upperHeader/UpHeader";
import Otp from "../registration/Otp";
import AddDetails from "../registration/AddDetails";

const RoutesP = () => {
  const auth= localStorage.getItem("token");
  return (
    <>
    <UpHeader/>
      <Routes>

        <Route path="/" element={<MasterPage>
          <Home/>
        </MasterPage>}></Route>
        <Route path="/about" element={<MasterPage>
          <About/>
        </MasterPage>}></Route>
        <Route path="/destination" element={<MasterPage>
          <Destinations/>
        </MasterPage>}></Route>
        <Route path="/tourpackages" element={<MasterPage>
          <TourPackage/>
        </MasterPage>}></Route>
        <Route path="/contact" element={<MasterPage>
          <ContactUs/>
        </MasterPage>}></Route>
        <Route path="/login" element={<MasterPage>
          <Loginp/>
        </MasterPage>}></Route>
        
{
  auth?<Route path="/logout" element={<MasterPage><Home/></MasterPage>} /> :<Route path="/login" element={<MasterPage><Loginp/></MasterPage>} />
}
       
        <Route path="/logout" element={<Home />} />
        <Route path="/registration" element={<MasterPage><Registration /></MasterPage>}></Route>
        <Route path="/otpverify" element={<MasterPage><Otp/></MasterPage>}></Route>
        <Route path="/adddetails" element={<AddDetails/>}></Route>
      </Routes>
    </>
  );
};

export default RoutesP;
