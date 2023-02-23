import logo from './logo.svg';
import './App.css';
import { AddProducts } from './pages/AddProducts';
import Navbar from './components/Navbar';
import Header from "./components/Header"
import SimpleSlider from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <AddProducts/> */}
      <Header />
      <Navbar />
      <SimpleSlider />
      <Footer/>
    </div>
  );
}

export default App;
