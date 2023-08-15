import { ChangeEvent } from "react";
import data from "../../../data/data.json";

export function find(items: string[], text: string): any {
  var result = text.split(" ");
  return items
    .filter((item) => {
      return result.every((el) => {
        return item.toUpperCase().includes(el.toUpperCase());
      });
    })
    .slice(0, 5) //upmost 5 results
    .join(" ");
}

export default function callSearch(text: string): string {
  let result: string;
  if (text === "") {
    result = "";
  } else {
    result = find(
      Object.entries(data).flatMap((e) => e[1]),
      text
    );
  }
  return result;
}
