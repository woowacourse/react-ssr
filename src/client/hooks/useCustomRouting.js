import { useEffect, useState } from "react";
import { matchRoute } from "../utils";
import URLObserver from "../observer/URLObserver";

const urlObserver = new URLObserver();

export default function useCustomRouting() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const listener = (newPath) => {
      setCurrentPath(newPath);
    };

    urlObserver.addListener(listener);

    return () => {
      urlObserver.removeListener(listener);
    };
  }, []);

  return { currentPath, match: matchRoute(currentPath) };
}
