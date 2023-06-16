/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// import '../style/index.scss';

window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#theExcuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = [
    "My dog",
    "Your grandma",
    "My turtle",
    "My bird",
    "A rogue donkey"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "ripped up",
    "smashed",
    "burned"
  ];
  let what = [
    "my homework",
    "my keys",
    "the car seat",
    "the bed",
    "my laptop",
    "my shirt"
  ];
  let when = [
    "before the class",
    "after my shower",
    "when I tried to leave",
    "during my lunch",
    "when I was singing"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    " ."
  );
};

console.log(generateExcuse);
