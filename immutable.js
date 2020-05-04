import { Map } from "immutable";

let book = Map({ title: "Harry Potter" });

console.log(book.get("title"));
function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
