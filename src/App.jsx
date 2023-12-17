import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Pant from './page/Pant/Pant'
import Home from './page/Home/Home'
import Shoe from './page/Shoe/Shoes'
import Shirt from './page/Shirt/Shirt'
import Navbar from './Component/Nav/Nav'
function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pant" element={<Pant/>} />
        <Route path="/shoe"  element={<Shoe/>}  />  
        <Route path="/shirt" element={<Shirt/>} />  
      </Routes>
     </Router>
    </>
  );
}

export default App;
