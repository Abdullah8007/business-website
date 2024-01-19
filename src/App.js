import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Features from './components/Features';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Home1 from './components/Home';
import Projects from './components/Projects';
import Service from './components/Service';
// import Team from './components/Team';
// import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Home1 /> */}
      {/* <About /> */}
      {/* <Service /> */}
      {/* <Features /> */}
      {/* <Projects /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
