import { checkIsWithinFiveMinutes } from "../utils/time";

const fs = require("fs");

const filePath = "./movieData.json";

export const saveMovieDataToFile = popularMovieList => {
  const date = Date.now();
  fs.writeFileSync(filePath, JSON.stringify({ popularMovieList, date }));
};

export const loadMovieDataFromFile = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    const { date, popularMovieList } = JSON.parse(data);
    const isWithinFiveMinutes = checkIsWithinFiveMinutes(
      new Date(date),
      new Date(Date.now())
    );

    return isWithinFiveMinutes ? { popularMovieList } : undefined;
  }
  return;
};
