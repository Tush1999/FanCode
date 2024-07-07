import { useEffect } from "react";

type InfiniteScroll = {
  successFunc: () => void;
  topOffset?: number;
}

const useInfiniteScroll = ({ successFunc, topOffset = 30 }: InfiniteScroll) => {

  const handleListener = () => {
    if (
      window.scrollY + window.innerHeight + topOffset >=
      document.documentElement.scrollHeight
    ) {
      successFunc();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleListener);

    const cleanup = () => window.removeEventListener("scroll", handleListener);

    return cleanup;
  }, [successFunc]);

  return "";
};

export default useInfiniteScroll;
