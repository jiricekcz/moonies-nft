import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RoadmapCard = ({ title, desc, img }) => {
  const [markerHeight, setMarkerHeight] = useState("0%");

  const viewAnim = {
    visible: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0.025,
      transform: "translateY(100px) scale(1.3)",
      transition: { duration: 0.4 },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      setMarkerHeight("100%");
      controls.start("visible");
    } else {
      setMarkerHeight("0%");
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={viewAnim}
      className="roadmap-item"
    >
      <img className="roadmap-planet" src={img} />
      <div className="roadmap-marker" style={{ maxHeight: markerHeight }} />

      <div className="roadmap-content">
        <h1 className="roadmap-title">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </motion.li>
  );
};

export default RoadmapCard;
