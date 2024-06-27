import Footerp from "../footer/Footerp"
import Header from "../header/Header"

const MasterPage = ({children}) => {
    
  return (
    <>
      <Header/>
      <div>{children}</div>
      <Footerp/>
    </>
  )
}

export default MasterPage
