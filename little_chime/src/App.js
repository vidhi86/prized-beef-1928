import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Header from "./components/Header"

import Footer from "./components/Footer";
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
