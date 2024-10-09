export const switchMoviePaths = (originalPaths, rootPath) => {
  const switchedPaths = {};

  Object.entries(originalPaths).forEach(([key, value]) => {
    if (value === "/") {
      switchedPaths[value] = rootPath;
    } else {
      switchedPaths[value] = key;
    }
  });

  return switchedPaths;
};
