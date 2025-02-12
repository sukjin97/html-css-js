const body = document.querySelector("body");

const button = document.createElement("button");
button.innerText = "펼치기";

const headerText = "주어진 임무를 끝까지 수행하는 집요한 개발자입니다.";

const header = document.querySelector("header");

header.innerText = headerText;
body.append(button);
