import Header from "../header/Header"

const MasterPage = ({children}) => {
    console.log('children', children)
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  )
}

export default MasterPage
