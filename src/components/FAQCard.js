import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/index.scss";

const FAQCard = ({ title, text }) => {
  const viewAnim = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0.5,
      scale: 0.9,
      transition: { duration: 0.4 },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="faq-item"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={viewAnim}
    >
      <input type="checkbox" id={`${title}`} className="faq-title" />
      <div className="faq-icon">+</div>
      <label htmlFor={`${title}`} className="faq-label">
        {title}
      </label>
      <div className="faq-text" dangerouslySetInnerHTML={{ __html: text }} />
    </motion.div>
  );
};

export default FAQCard;
