let dice = [
  "https://cdn-icons-png.flaticon.com/128/0/751.png",
  "https://cdn-icons-png.flaticon.com/128/10990/10990646.png",
  "https://cdn-icons-png.flaticon.com/128/7262/7262393.png",
  "https://cdn-icons-png.flaticon.com/128/0/963.png",
  "https://cdn-icons-png.flaticon.com/128/0/780.png",
  "https://cdn-icons-png.flaticon.com/128/0/165.png",
];

const divs = document.querySelectorAll("#root > div");
let myDices = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img");
  img.alt = `${index + 1}번째 주사위`;

  return img;
});

let comDices = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img");
  img.alt = `${index + 1}번째 주사위`;

  return img;
});

console.log(comDices);

const makeNumber = () => Math.floor(Math.random() * 6);

console.log(makeNumber());
divs.forEach((div, index) => {
  div.innerHTML = null;
  if (index === 0) {
    myDices.forEach((img) => {
      img.src = dice[makeNumber()];

      div.append(img);
    });
  } else {
    comDices.forEach((img) => {
      img.src = dice[makeNumber()];

      div.append(img);
    });
  }
});

const button = document.querySelector("button");

button.onclick = () => {
  const id = setInterval(() => {
    myDices.forEach((img) => {
      img.src = dice[makeNumber()];
      img.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(1800deg)" }],
        {
          duration: 3000,
        }
      );
    });
  }, 100);
  const countId = setInterval(() => {
    if (time === 3) {
      clearInterval(countId);
      clearInterval(id);
      time = 0;

      return;
    }
    time += 1;
  }, 1000);
};
