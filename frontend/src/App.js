import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GUserIndex from "./forms/guserforms/GUserIndex";
import GUserAbout from "./forms/guserforms/GUserAbout";
import GUserContact from "./forms/guserforms/GUserContact";
import GUserServices from "./forms/guserforms/GUserServices";
import GUserPhotos from "./forms/guserforms/GUserPhotos";
import GUserLoginReg from "./forms/guserforms/GUserLoginReg";
function App() {
  return  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<GUserIndex/>} />
      <Route exact path="/about" element={<GUserAbout/>} />
      <Route exact path="/contact" element={<GUserContact/>} />
      <Route exact path="/services" element={<GUserServices/>} />
      <Route exact path="/photos" element={<GUserPhotos/>} />
      <Route exact path="/loginreg" element={<GUserLoginReg/>} />
    </Routes>
  </Router> 
    </>;
}

export default App;
