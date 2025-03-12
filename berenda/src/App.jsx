import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'

/* import Projects from './pages/Projects.jsx'

import About from './pages/About.jsx'

import Contact from './pages/ContactMe.jsx' 



*/
import Footer from './components/Footer/footer.jsx' 
import './App.css'

function App() {
  
const [ison,seton] = useState(false)

  return (
    <>
    <Router>
    <div className="app-container">
      <Sidebar ison={ison} /> 
      <div className={"main-content"}>
      <Routes>
        <Route path="/" element={<Home ison={ison} seton={seton} />}/>
{/*     <Route path ="/projects" element={<Projects/>}/>       
        <Route path ="/About" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>  */}
      </Routes>
      </div>
    </div>
    <Footer />
   </Router> 
      
    </>
  )
}

export default App
