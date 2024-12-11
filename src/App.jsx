import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import NavBar from './component/layout/navBar.jsx';
import Home from './component/Home.jsx';
import About from './component/page/About.jsx';
import Contact from './component/page/Contact.jsx';
import Footer from './component/layout/footer.jsx';
import Login from './component/auth/login.jsx';
import Signup from './component/auth/signup.jsx';

const App = () => {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
