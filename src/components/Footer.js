import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="container" style={{ position: "sticky", zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2 className="footer-heading">
              <a href="#" className="logo">
                Moonies
              </a>
            </h2>

            <div className="social-buttons">
              <motion.a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="social-buttons__button social-button"
                whileHover={{ filter: "saturate(2.5)" }}
              >
                <img
                  src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.svg"
                  width="55"
                />
              </motion.a>
              <a
                href="https://twitter.com/Moonies_NFT"
                rel="noreferrer"
                target="_blank"
                className="social-buttons__button social-button social-button--twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://discord.com/invite/mYpZ8ucaaZ"
                rel="noreferrer"
                target="_blank"
                className="social-buttons__button social-button social-button--discord"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="copyright">
              Copyright &copy;
              {` ${new Date().getFullYear()}`} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
