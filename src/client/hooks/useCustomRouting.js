import { useSyncExternalStore } from "react";
import { matchRoute } from "../utils";
import URLObserver from "../observer/URLObserver";

const urlObserver = new URLObserver();

export default function useCustomRouting() {
  const currentPath = useSyncExternalStore(
    (callback) => {
      urlObserver.addListener(callback);
      return () => {
        urlObserver.removeListener(callback);
      };
    },
    () => window.location.pathname
  );

  return { currentPath, match: matchRoute(currentPath) };
}
