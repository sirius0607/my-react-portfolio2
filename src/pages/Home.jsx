import Skills from '../components/Skills';
import About from '../components/About';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Interests from '../components/Interests';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Interests/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;