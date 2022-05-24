import { animated, useSpring } from "react-spring";

import FAQCard from "../components/FAQCard";

const FAQ = () => {
  const titleAnimation = useSpring({
    from: {
      textAlign: "center",
      color: "var(--light)",
      transform: "translateY(-120px)",
    },
    to: [
      {
        textAlign: "center",
        color: "var(--light)",
        transform: "translateY(15px)",
      },
    ],
    config: { mass: 3, tension: 300, friction: 25 },
  });

  return (
    <div
      className="container"
      id="faq"
      style={{
        position: "relative",
        minWidth: "100vw",
        padding: "100px 40px",
        scrollMarginTop: 140,
      }}
    >
      <center>
        <animated.h1 style={titleAnimation} className="heading-h1">
          <span className="primary-h">FAQ</span>
        </animated.h1>
        <div className="faq-container">
          <FAQCard
            title="What is the total supply?"
            text="With over 500 traits, a total of 8,888 unique Moonies will be living on Ethereum blockchain."
          />
          <FAQCard
            title="When is the launch?"
            text="We are still finishing the art. Once done, the exact date will be announced on our discord."
          />
          <FAQCard
            title="Who is the artist?"
            text="The artist is Josh, father of two adorable children who has drawn so far over 450 traits for Moonies."
          />
          <FAQCard
            title="Why should I get a Moonie?"
            text="Once our Moonies drop, holders will have access to our upcoming P2E arcade 
             game, priority access for our Space Launch Competition, IRL Moonies Holders Meetup, exclusive merch and not to mention our companion drop."
          />
          <FAQCard
            title="Is there an OG?"
            text="We have 100 OG roles, some have been rewarded, some will be given out to 
             those who would show us consistent support throughout our journey."
          />
          <FAQCard
            title="How can I get whitelisted?"
            text="We are currently offering Moonie-list to those who are participating in 
           our Twitter giveaways or in our Discord giveaways. As we grow, we will add more giveaways and ways to reward the community with Moonie-list."
          />
          <FAQCard
            title="Is there a roadmap?"
            text="As Lao Tzu had once said, <q>a journey of 1000 miles begins with a single step.</q> We think that the best form of building (especially in the context of the community) is to under-promise and over-deliver. So get ready and fasten your seatbelts please."
          />
        </div>
      </center>
    </div>
  );
};

export default FAQ;
