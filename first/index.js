// 문자열 글자 '' "" ``
const myString = "김석진";

const body = document.querySelector("body");
const p = document.createElement("p");

p.innerText = myString;
p.style.color = "blue";
p.className = "header";
body.append(p);
