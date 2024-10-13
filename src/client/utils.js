export const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

export function matchRoute(path) {
  const routes = [
    { pattern: /^\/detail\/(\d+)$/, name: "detail" },
    { pattern: /^\/$/, name: "home" },
  ];

  const matchedRoute = routes.find((route) => path.match(route.pattern));

  if (matchedRoute) {
    const params = path.match(matchedRoute.pattern).slice(1);
    return { name: matchedRoute.name, params };
  }

  return { name: "notFound", params: [] };
}

export const navigate = (path) => {
  window.history.pushState({}, "", path);
};
