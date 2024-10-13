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

  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];

  let generator = `${randomPronoun} ${randomAdj.charAt(0).toLowerCase() +
    randomAdj.slice(1)} ${randomNoun.charAt(0).toLowerCase() +
    randomNoun.slice(1)} ${randomAction.charAt(0).toLowerCase() +
    randomAction.slice(1)}`;

  console.log(generator);
};
