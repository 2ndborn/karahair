import { useEffect, useState } from "react";

function useScrollTrigger() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleSection = document.getElementById("title-container");
      if (!titleSection) {
        console.warn("TitleContainer not found!");
        return;
      }

      const rect = titleSection.getBoundingClientRect();
      setShowNav(rect.bottom < 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav]);

  return showNav;
}

export default useScrollTrigger