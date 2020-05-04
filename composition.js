import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();
//compose and pipe takes arguments in opposite directions
const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));
