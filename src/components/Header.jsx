import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../App.css";
function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <header>
        <div className="link-container">
          <a href="/">Home</a>
          <a href="#facilities">Facilities</a>
          <a href="#services">Services</a>
        </div>
        <img onClick={() => setNav(!nav)} src="/header-logo.svg" alt="" />
        <div className="link-container">
          <a href="/">About</a>
          <a href="#facilities">Gallery</a>
          <a href="#services">Contact</a>
        </div>
      </header>
      <AnimatePresence>
        {nav && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a href="">Home</a>
            <a href="">Facilities</a>
            <a href="">Services</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
