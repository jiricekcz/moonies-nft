import { useSpring, animated } from "react-spring";

import homeImg from "../assets/home_img.png";
import MintModal from "../components/MintModal";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
  const { width } = useWindowDimensions();

  const imgAnimation = useSpring({
    from: {
      opacity: 0,
      width: "100%",
      transform: "translateX(120px)",
    },
    to: [
      {
        opacity: 1,
        width: "100%",
        transform: "translateX(0px)",
      },
    ],
    config: { mass: 3, tension: 300, friction: 25 },
  });

  const titleAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-120px)",
    },
    to: [
      {
        opacity: 1,
        transform: "translateX(5px)",
      },
    ],
    config: { mass: 3, tension: 300, friction: 25 },
  });

  return (
    <div id="home" style={{ height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          left: "25%",
          maxHeight: "25%",
          top: "auto",
          bottom: 0,
          zIndex: 1,
        }}
      ></div>
      <div className="centered">
        <center>
          <animated.img src={homeImg} style={imgAnimation} />
          <animated.div style={titleAnimation}>
            <span
              style={{
                fontSize: width > 992 ? 90 : 36,
                fontWeight: 600,
                letterSpacing: 10,
                cursor: "default",
                textAlign: "center",
                color: "var(--light)",
              }}
            >
              MOONIES
            </span>
            <br />
            {width < 992 && <br />}
            <a href="" style={{ all: "unset" }}>
              <button className="primary-btn" disabled={true}>
                MINT SOON!
              </button>
            </a>
            {/* <button
              type="button"
              class="primary-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              Mint Soon!
            </button> */}
          </animated.div>
        </center>
      </div>
      <MintModal />
    </div>
  );
};

export default Home;
