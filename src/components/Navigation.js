import { animated, useSpring } from "react-spring";

import logo from "../assets/logo.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Navigation = () => {
  const { width } = useWindowDimensions();

  const navAnimation = useSpring({
    from: {
      opacity: 0,
      scale: 0.5,
      transform: "translateY(-100px)",
    },
    to: [{ opacity: 1, scale: 1, transform: "translateY(10px)" }],
    config: { mass: 2, tension: 190, friction: 22 },
  });

  const brandAnimation = useSpring({
    from: {
      opacity: 0,
      scale: 1.1,
      cursor: "pointer",
      width: width > 992 ? "40%" : "50%",
    },
    to: [
      {
        opacity: 1,
        scale: 1,
        cursor: "pointer",
        width: width > 992 ? "40%" : "50%",
      },
    ],
    config: { mass: 2, tension: 190, friction: 22 },
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar fixed-top`}
      style={{ marginBottom: 60 }}
    >
      <div className="container-fluid">
        <div
          style={{
            marginTop: width < 992 && 20,
            marginLeft: width < 992 && 10,
            marginRight: width > 992 && -500,
          }}
        >
          <a
            className="navbar-brand"
            href="/"
            style={{ marginLeft: width > 992 && 80 }}
          >
            <animated.img src={logo} alt="img" style={brandAnimation} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white", position: "absolute", right: 20 }}
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars"></i>
            </span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse mb-2 mb-lg-4"
          id="navbarSupportedContent"
          style={{
            marginLeft: width > 992 && -80,
          }}
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item"></li>
          </ul>
          <ul className="navbar-nav me-5 nav-list">
            <animated.li className="nav-item" style={navAnimation}>
              <a href="/#home" className="nav-link">
                <span className="text">Home</span>
              </a>
            </animated.li>
            <animated.li className="nav-item" style={navAnimation}>
              <a href="/#about" className="nav-link">
                <span className="text">About</span>
              </a>
            </animated.li>
            <animated.li className="nav-item" style={navAnimation}>
              <a href="/#team" className="nav-link">
                <span className="text">Team</span>
              </a>
            </animated.li>
            <animated.li className="nav-item" style={navAnimation}>
              <a href="/#faq" className="nav-link">
                <span className="text">FAQ</span>
              </a>
            </animated.li>
            <animated.li className="nav-item" style={navAnimation}>
              <a href="/#roadmap" className="nav-link">
                <span className="text">RoadMap</span>
              </a>
            </animated.li>
          </ul>
          <ul className="navbar-nav me-auto">
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
