import { animated, useSpring } from "react-spring";

import joshImg from "../assets/josh.png";
import paulImg from "../assets/paul.jpg";
import mikeImg from "../assets/mike.jpg";
import sadiImg from "../assets/sadi.jpg";

import TeamCard from "../components/TeamCard";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Team = () => {
  const { width } = useWindowDimensions();

  const titleAnimation = useSpring({
    from: {
      textAlign: "center",
      color: "var(--light)",
      transform: "translateY(-100px)",
    },
    to: [
      {
        textAlign: "center",
        color: "var(--light)",
        transform: "translateY(15px)",
      },
    ],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <div
      id="team"
      className="container"
      style={{
        position: "relative",
        minWidth: "100vw",
        padding: "100px 40px",
        scrollMarginTop: 140,
      }}
    >
      <center>
        <animated.h1 style={titleAnimation}>
          <span className="primary-h">Team</span>
        </animated.h1>
        <br />
        <div className="row justify-content-md-center">
          <TeamCard
            source={joshImg}
            name={"Josh"}
            desc={
              "<span style='color: var(--secondary)'>Founder & Artist</span><hr/>Father of 2, trained illustrator and crypto degenerate since 2013."
            }
            social={"https://twitter.com/joshyoowa"}
          />
          <TeamCard
            source={sadiImg}
            name={"Sadi"}
            desc={
              "<span style='color: var(--secondary)'>Community Manager</span><hr/>Aka struggles. Former k-pop star chaser now chasing Web3 and NFTs."
            }
            social={"https://twitter.com/sadiafrin"}
          />
          <TeamCard
            source={mikeImg}
            name={"Mike-G"}
            desc={
              "<span style='color: var(--secondary)'>Community Manager</span><hr/>Aka possum. Part-time English teacher and full-time adventurer at heart."
            }
            social={"https://twitter.com/Mguillen417"}
          />
          <TeamCard
            source={paulImg}
            name={"Paul"}
            desc={
              "<span style='color: var(--secondary)'>Strategist</span><hr/>2 x founder and brand strategist cum Web3 evangelist."
            }
            social={"https://twitter.com/UPG798"}
          />
        </div>
      </center>
    </div>
  );
};

export default Team;
