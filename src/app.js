/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["The", "Our", "Your"];
  let adj = ["great", "big", "beautiful", "ugly", "small"];
  let noun = ["jogger", "racoon", "dog", "bird"];
  let domains = [".com", ".net", ".us", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domains.length; d++) {
          console.log(pronoun[p] + adj[a] + noun[n] + domains[d]);
        }
      }
    }
  }
};
