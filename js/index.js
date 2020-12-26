"use strict";

const add = document.getElementById('add_button');
const list = document.getElementById('list');
let text = document.getElementById("text");


const addTask = add => {
  if (add !== "") {
    const taskLi = document.createElement('li');
    const removeButton = document.createElement('button');
    const eraseButton = document.createElement('button');

    removeButton.innerText = '削除';
    eraseButton.innerText = '完了';

    removeButton.addEventListener('click', a => {
      const removeTask = removeButton.closest('li');
      list.removeChild(removeTask);
    });
    eraseButton.addEventListener('click', a => {
      const eraseTask = removeButton.closest('li');
      taskLi.classList.add('line');
    });

// liの追加処理
    taskLi.textContent = add;
    taskLi.append(removeButton);
    taskLi.append(eraseButton);
    list.insertBefore(taskLi, list.firstChild);
  }
};

add.addEventListener('click' , () => {
  const value = text.value;
  addTask(value);
});