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
        </div>
        <img onClick={() => setNav(!nav)} src="/black-logo.svg" alt="" />
        <div className="link-container">
        <a href="#memberships">Memberships</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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
            <a href="/">Home</a>
            <a href="#contact" onClick={()=> setNav(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
