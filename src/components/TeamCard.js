import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamCard = ({ source, name, desc, social }) => {
  const viewAnim = {
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0.5,
      transform: "translateX(-100px)",
      transition: { duration: 0.4 },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
      className="col-md-auto"
    >
      <aside className="profile-card">
        <div className="mask-shadow"></div>
        <header>
          <img src={source} alt="avatar" />
          <h1>{name}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: desc }} />
        </header>
        <br />
        <a href={social} rel="noreferrer" target="_blank">
          <i className="bi bi-twitter social-icon"></i>
        </a>
      </aside>
    </motion.div>
  );
};

export default TeamCard;
