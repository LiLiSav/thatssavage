import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "components/App/Navbar";
import { Footer } from "components/App/Footer";
import Home from "pages/Home";
import Graphic from "pages/Graphic";
import Contact from "pages/Contact";
import About from "pages/About";
import Terms from "pages/Terms";
import Gallery from "pages/Gallery";
import { NotFound } from "components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/graphic-design" element={<Graphic />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
