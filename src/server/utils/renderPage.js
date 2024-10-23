import fs from "fs";
import path from "path";

const renderPage = (renderedApp, initData) => {
  const templatePath = path.resolve(__dirname, "index.html");

  const template = fs.readFileSync(templatePath, "utf8");
  return template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${INIT_DATA_AREA}-->", initData);
};

export default renderPage;
