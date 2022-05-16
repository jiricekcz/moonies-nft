import { animated, useSpring } from "react-spring";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import imgReel from "../assets/reel.gif";
import useWindowDimensions from "../hooks/useWindowDimensions";

const About = () => {
  const { width } = useWindowDimensions();
  const titleAnimation = useSpring({
    from: {
      textAlign: "center",
      color: "var(--light)",
      marginBottom: 40,
      transform: "translateY(-100px)",
    },
    to: [
      {
        textAlign: "center",
        color: "var(--light)",
        marginBottom: 40,
        transform: "translateY(15px)",
      },
    ],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  const viewAnim = {
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0.5,
      transform: "translateX(100px)",
      transition: { duration: 0.4 },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={viewAnim}
      id="about"
      style={{
        position: "relative",
        minWidth: "60vw",
        padding: "100px 0px",
        scrollMarginTop: 140,
      }}
      className="container"
    >
      <center>
        <animated.h1 style={titleAnimation}>
          <span className="primary-h">About The Project</span>
        </animated.h1>
        <br /> <br />
        <div
          className={`${width > 992 ? "row" : "col"} justify-content-center`}
        >
          <div className="col-md-auto">
            <img src={imgReel} style={{ width: width > 992 ? "93%" : "80%" }} />
          </div>
          <div className="col">
            <p
              className="primary-p"
              style={{ width: "90%", textAlign: width > 992 && "left" }}
            >
              Moonies is generative project consisting of 8,888 avatars, made
              up from over <strong>600</strong> hand drawn traits - a lot of
              which never seen before in any other collection!
              <br />
              <br />
              There will be many benefits of holding a Moonie, make sure you
              give the Roadmap a good read to see exactly what these are.
              <br />
              <br />
              Among the 8,888 will be ten unique 1/1 Moonies. These hold
              extremely special perks for those luckily enough to mint one.
              Details of which will only be revealed on launch day.
              <br />
              <br />
              Your Moonie is your pilot, buckle up and prepare for blast off -
              we aren’t heading for the Moon…we ARE the Moon.
            </p>
          </div>
        </div>
      </center>
    </motion.div>
  );
};

export default About;
