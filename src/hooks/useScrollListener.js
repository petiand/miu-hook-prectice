import { useEffect } from "react";

const useScrollListener = ({ callBack }) => {
  useEffect(() => {
    const handleScroll = () => {
      const yMax =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (window.scrollY > yMax - 50 && yMax !== 0) {
        callBack();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callBack]);
};

export default useScrollListener;
