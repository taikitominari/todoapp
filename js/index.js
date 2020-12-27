"use strict";

const add = document.getElementById('add_button');
const list = document.getElementById('list');
let text = document.getElementById("text");


const addTask = add => {
  if (add !== "") {
    const taskLi = document.createElement('li');
    const removeButton = document.createElement('button');
    const eraseButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    removeButton.innerText = '削除';
    eraseButton.innerText = '完了';
    cancelButton.innerText = '取り消し';

    eraseButton.addEventListener('click', () => {
      taskLi.classList.add('line');
    });

    cancelButton.addEventListener('click' , () => {
      taskLi.classList.remove('line');
    });
    
    removeButton.addEventListener('click', () => {
      const removeTask = removeButton.closest('li');
      list.removeChild(removeTask);
    });

// liの追加処理
    taskLi.textContent = add;
    taskLi.append(eraseButton);
    taskLi.append(cancelButton);
    taskLi.append(removeButton);
    list.insertBefore(taskLi, list.firstChild);
  }
};

add.addEventListener('click' , () => {
  const value = text.value;
  addTask(value);
});