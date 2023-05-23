import { BrowserRouter ,Routes , Route } from "react-router-dom"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Media from "./components/pages/Media";
import PagenotFound from "./components/pages/PagenotFound";
import Header from "./components/layout/Header";
import Footer from "./components/footer/Footer";
import BrandingBigwals from "./components/footer/BrandingBigwals";


function App() {
  return(
  <div>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Media" element={<Media/>} />
    <Route path="/Courses" element={<Courses/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="*" element={<PagenotFound/>} />
  </Routes>
  <Footer/>
  <BrandingBigwals/>
  </BrowserRouter>
  </div>
  )
}
export default App;
