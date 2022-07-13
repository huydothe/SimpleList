import {ArrayList} from "./List";

let arraylist = new ArrayList<string>();
arraylist.add("Lập trình JS");
arraylist.add("Lập trình PHP");
arraylist.add("Lập trình JavaScript");

console.log(arraylist.container);
console.log(arraylist.get(2));
arraylist.remove();
console.log(arraylist.size());

console.log(arraylist.container);