// import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import About from "../about/About"
import Destinations from "../destinations/Destinations"
import TourPackage from "../tourpackages/TourPackage"
import ContactUs from "../contact/ContactUs"
import Loginp from "../login/Loginp"
import Registration from "../registration/Registration"

const RoutesP = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/destination" element={<Destinations/>}></Route>
        <Route path="/tourpackages" element={<TourPackage/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/login" element={<Loginp/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
    </Routes>
    </>
  )
}

export default RoutesP
