import fs from "fs";
import path from "path";

import { Product } from "./types";

export const loadData = (category: string): Product[] => {
  const filePath = path.join(__dirname, "..", "data", `${category}.json`);

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading data for category '${category}':`, error);
    return [];
  }
};
