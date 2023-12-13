import { useEffect, useState } from "react";

const useGetScreenWidth = () => {
  const [screenwWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenwWidth;
};

export default useGetScreenWidth;
