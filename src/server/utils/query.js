export function addQueryParams(url, params) {
  const urlObject = new URL(url);
  Object.keys(params).forEach((key) => urlObject.searchParams.append(key, params[key]));
  return urlObject.toString();
}
