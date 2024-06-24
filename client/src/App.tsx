import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import UpHeader from './components/upperHeader/UpHeader'
import Carouselp from './components/carousel/Carouselp';
import Service from './components/service/Service';

function App() {

  return (
    <>
    <UpHeader/>
    <Header/>
    <Carouselp/>
    <Service/>
    </>
  )  
}

export default App
