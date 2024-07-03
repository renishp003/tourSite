import { Card } from "react-bootstrap"
import stunningbg from '../../assets/images/stunning-bg.jpg'
import './bgimg.css'

const Bgimg = () => {
  return (
    <>
    <Card className="text-white defaultProp">
      <Card.Img src={stunningbg} alt="Card image" className="bgimghome"/>
      <Card.ImgOverlay className="d-flex justify-content-end align-items-center">
        <div className="textpostion">
        <Card.Title className="fs-1 pb-3" style={{fontWeight:"800"}}>Discount <span style={{color:"yellow"}}>10-30% Off</span></Card.Title>
        <Card.Text>
        You can get more n more discount on your tour booking <br /> with good services 
and hospitality.here you can save your <br/> money and wonder at your favorite 
place in your budget.
        </Card.Text>
        </div>
             </Card.ImgOverlay>
    </Card>
    </>
  )
}

export default Bgimg