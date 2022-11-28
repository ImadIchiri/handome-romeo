import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Call at load time
    handleSize();

    window.addEventListener("resize", handleSize);

    return window.removeEventListener("resize", handleSize);
  }, []);
  return windowSize;
};

export default useWindowSize;
