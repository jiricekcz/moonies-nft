import { animated, useSpring } from "react-spring";

import planetOne from "../assets/planet_1.png";
import planetTwo from "../assets/planet_2.png";
import planetThree from "../assets/planet_3.png";
import planetFour from "../assets/planet_4.png";
import planetFive from "../assets/planet_5.png";

import RoadmapCard from "../components/RoadmapCard";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Roadmap = () => {
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
      id="roadmap"
      className="roadmap-bg"
      style={{
        position: "relative",
        minWidth: "100vw",
        padding: "100px 40px",
        scrollMarginTop: 140,
      }}
    >
      <center>
        <animated.h1 style={titleAnimation}>
          <span className="primary-h">Roadmap</span>
        </animated.h1>
        <br />
        <div
          className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
          style={{ margin: 40 }}
        >
          <ul className="roadmap roadmap-centered">
            <RoadmapCard
              title={"25%"}
              desc={
                "20 Moonies NFTs will be airdropped to early Moonies adopters to thank them for believing in us (OGs: 15, WL:5) Holders will be chosen via raffle."
              }
            />

            <RoadmapCard
              title={"50%"}
              desc={
                "A Moonies Merch line featuring Limited Edition t-shirt, hoodies, caps and more will be launched. We will host competitions where holders will design the graphics for this merch. The community will vote on their favourite entries and the winning designs will make their way into the merch store; with the designers getting all the profits."
              }
            />
            <RoadmapCard
              title={"75%"}
              desc={
                "We will start preparing the artwork for our companion drop and start to assemble the team for our P2E arcade game!"
              }
            />
            <RoadmapCard
              title={"100%"}
              desc={
                "We are sold out!!! Once everyone has their Moonie, the Space Launch competition will begin. Through a series of knockout stages, the community will vote on their favourite Moonie. When a sole winner has been determined, the owner and a plus one guest will get an all expenses paid, week-long trip to Las Vegas! The team and the winner (plus guest) will have a blast in Vegas, while their Moonie gets 3D printed, and then fired into Earth's orbit to become an ACTUAL moon!"
              }
            />
          </ul>
        </div>
        <br />
        <div
          className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
          style={{ margin: 40 }}
        >
          <ul className="roadmap roadmap-centered">
            <RoadmapCard
              title={"Moonie Meet-up"}
              img={planetOne}
              desc={
                "We will definitely want to meet you guys, so when (not if) Moonies get to a 1 ETH floor, we will arrange our first IRL meet-up.<br/><br/>This meet-up will most likely happen in London – big venue, lots of NFT related events and plenty of entertainment for all Moonie holders! The OG holders of the collection will get their flights and accommodation paid for!"
              }
            />

            <RoadmapCard
              title={"P2E Arcade Game."}
              img={planetTwo}
              desc={
                "A play to earn arcade game is being planned and with the genesis collection sold out, it will be fully developed and released.<br/><br/>What is this P2E arcade game? Think of it as a modern take on Space Invaders with some RPG elements. Rewards of playing the game will be Moondust or $DUST. Your Moonie will pilot your ship – the more Moonies you have, the more ships you have.<br/><br/> Each ship can be sent out on deep-space quests. These require zero attention from you and passively earn $DUST at a slower rate. Alternatively, you can get behind the wheel yourself for a ‘space invaders’ type experience. This requires your full attention, however earns $DUST at a much faster rate.<br/><br/>$DUST can be spent upgrading your ship as you level up, decreasing deep-space quest times - increasing the amount of $DUST earned per ship and adding more hangers to send more ships simultaneously. (Providing you have the Moonies to pilot them!) As well as being a major component of the game, $DUST will also be used in the rest of the Moonie-verse"
              }
            />
            <RoadmapCard
              title={"Merchandise Store"}
              img={planetThree}
              desc={
                "Shortly after Moonies sell out, the merch store will open. Apart from apparels, a selection of limited edition Moonie bobble heads will also find their way into the store. If you ask  nicely, maybe your Moonie will become a bobble head!<br/><br/>You will also be able to purchase all of the merch with $DUST you have earned from the game if you so desire!"
              }
            />
            <RoadmapCard
              title={"Space Launch Competition"}
              img={planetFour}
              desc={
                "Once everyone has their Moonie, the Space Launch competition will begin. Through a series of knockout stages, the community will vote on their favourite Moonie.<br/><br/>When a sole winner has been determined, the owner and a plus one guest will get an all expenses paid, week-long trip to Las Vegas! The team and the winner (plus guest) will have a blast in Vegas, while their Moonie gets 3D printed. When ready it will get fired into Earth's orbit and become an ACTUAL moon!"
              }
            />
            <RoadmapCard
              title={"Companion Drop"}
              img={planetFive}
              desc={
                "After we accomplish all this, phase one of the roadmap will be complete. This will be celebrated with a companion drop and we will begin a new journey!"
              }
            />
          </ul>
        </div>
      </center>
    </div>
  );
};

export default Roadmap;
