import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import * as Sentry from "@sentry/react";

const App = () => {

  return (
    <div className='font-sans bg-blue-950 overflow-x-hidden'>
      <Navbar />
      <Hero />
      <section id='about'><About /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>
      <Footer />
    </div>
  )
}

export default Sentry.withProfiler(App);