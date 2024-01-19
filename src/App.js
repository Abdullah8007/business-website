import './App.css';
import About from './components/About';
import Contact from './components/Contact';
// import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
// import Projects from './components/Projects';
import Service from './components/Service';
import Team from './components/Team';
// import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      {/* <Features /> */}
      {/* <Projects /> */}
      <Team />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
