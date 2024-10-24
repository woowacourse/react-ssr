import fs from "fs";
import path from "path";

export const getInnerHTML = (renderedApp, datas) => {
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          ${datas
            .map((data) =>
              Object.entries(data)
                .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                .join(",\n")
            )
            .join(",\n")}
        };
      </script>
      `
    );

  return renderedHTML;
};
