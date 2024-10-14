/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let action = ["ran away", "jumped off the cliff"];

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  const generator = `${getRandom(pronoun)} ${getRandom(adj)} ${getRandom(noun)} ${getRandom(action)}`;

  console.log(generator);
};
