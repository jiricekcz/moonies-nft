import { useState } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: 60,
        right: 60,
        outline: "none",
        border: "none",
        background: "transparent",
      }}
    >
      <i
        style={{
          opacity: visible ? 1 : 0,
          transition: "0.3s ease",
          cursor: "pointer",
          fontSize: 55,
          color: "var(--light)",
        }}
        className="bi bi-arrow-up-circle-fill"
      ></i>
    </button>
  );
};

export default GoToTop;
