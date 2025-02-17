const root = document.querySelector("#root");

const title = document.querySelector("h1");
const button = document.querySelector("button");
const con = document.querySelector("con");
const messages = ["안내면 진다!", "가위", "바위", "보"];
let msgIndex = 0;

let intervalId = null;
let time = 0;

const span1 = document.createElement("span");
const span2 = document.createElement("span");

let imgIndex = 0;
let imgIndex2 = 0;
const img = document.querySelectorAll("img"); //qsa 해당 선택자의 모든 태그를 선택하여 배열로 반환한다.

const span = document.querySelectorAll("img");

const imgs = [
  "https://cdn-icons-png.flaticon.com/128/5703/5703205.png",
  "https://cdn-icons-png.flaticon.com/128/3562/3562093.png",
  "https://cdn-icons-png.flaticon.com/128/12355/12355903.png",
];

img.forEach((i, index) => (i.src = imgs[index]));

root.append(span);

button.onclick = () => {
  title.innerText = messages[msgIndex];
  if (msgIndex === messages.length - 1) {
    return (title.innerText = "이겼다");
  }
  msgIndex += 1;

  intervalId = setInterval(() => {
    console.log("time is ticking...");
    imgIndex += 1;
    span.innerText = imgs[imgIndex];
    span2.innerText = imgs[imgIndex2];
  }, 250);

  con.innerHTML = null;
  const h2 = document.createElement("h2");
  h2.innerText = "VS";
  con.append(img[0], h2, img[2]);
};

const number = Math.random();

console.log(number);
