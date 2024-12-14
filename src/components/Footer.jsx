import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Footer() {

  const [ terms, setTerms] = useState(false)
  return (
    <>
          <footer>
        <div className="footer-card">
            <img src="/mail.svg" alt="" />
            <h3>Contact Us</h3>
            <a href="mailto:contact@areacentre.com">contact@areacentre.com</a>
            <p onClick={() => setTerms(!terms)}>Our Terms & Conditions</p>
        </div>
    </footer>

    <AnimatePresence initial={false}>
      {terms && (
        <motion.div className="terms"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
          <div onClick={() => setTerms(false)} className="close">
            <p>Close</p>
          </div>
          <h2>Privacy and Legal Terms</h2>
          <h3>Privacy Notice</h3>
          <p>We value your privacy. By submitting your information, you agree to our collection, use, and protection of your personal data as described in this policy. We gather personal information solely for the purpose of providing information on our memberships and related services. Your data is securely stored and will not be shared with third parties without your explicit consent, except where required by law.</p>

          <h3>Data Collection and Use</h3>
          <p>We collect only necessary information, such as your name, email, and preferences, to provide relevant updates and offers regarding our memberships. This data allows us to better understand your interests and enhance our services. You may opt out of communications at any time by following the instructions provided in our emails.</p>

          <h3>Cookies</h3>
          <p>Our website uses cookies to enhance user experience and analyze site traffic. By using our site, you consent to our use of cookies as outlined in our Cookie Policy, which details how we manage and store cookies and related data.</p>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export default Footer;
