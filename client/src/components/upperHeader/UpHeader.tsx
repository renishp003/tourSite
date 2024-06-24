
import "./upheader.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMobileAlt,
} from "react-icons/fa";

const UpHeader = () => {
  return (
    <>
      <div className="container-fluid header d-flex align-items-center justify-content-center py-2">
      <div className="row rowupersize">
        <div className="col-md-6 text-center text-md-left text-lg-start ">
          <div className="text-nowrap ">
            <FaMobileAlt className="me-2" />
            <span>Call us now +1 5589 55488 55</span>
          </div>
        </div>
        <div className="col-md-6 text-center text-md-right text-lg-end">
          <div className="text-nowrap">
           <FaInstagram className="me-2"/>
           <FaFacebookF className="me-2"/>
           <FaTwitter className="me-2"/>
           <FaWhatsapp className="me-2"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UpHeader;
