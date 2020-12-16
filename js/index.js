"use strict";

let add = document.getElementById('add_button');
const list = document.getElementById('list');

add.onclick = function() {
  let text = document.getElementById("text").value;
  if (text !== "") {
    const taskLi = document.createElement('li');
    taskLi.textContent = text;
    list.insertBefore(taskLi, list.firstChild);
  };
}