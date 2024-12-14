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
            <a href="#memberships">Services</a>
        </div>
        <img onClick={() => setNav(!nav)} src="/black-logo.svg" alt="" />
        <div className="link-container">
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
            <a onClick={() => setNav(false)} href="/">Home</a>
            <a onClick={() => setNav(false)} href="#facilities">Facilities</a>
            <a onClick={() => setNav(false)} href="#memberships">Services</a>
            <a onClick={() => setNav(false)} href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
