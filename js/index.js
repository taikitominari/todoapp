"use strict";

const add = document.getElementById('add_button');
const list = document.getElementById('list');
let text = document.getElementById("text");

// 項目追加処理
const addTask = add => {
  if (add !== "") {
    const taskLi = document.createElement('li');
    const removeButton = document.createElement('button');
    const eraseButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    removeButton.innerText = '削除';
    eraseButton.innerText = '完了';
    cancelButton.innerText = '取り消し';

  // 完了処理
    eraseButton.addEventListener('click', () => {
      taskLi.classList.add('line');
    });
  // 取り消し処理
    cancelButton.addEventListener('click' , () => {
      taskLi.classList.remove('line');
    });
  // 削除機能
    removeButton.addEventListener('click', () => {
      const remove = function() {
        const removeTask = removeButton.closest('li');
        list.removeChild(removeTask);
      };
      function confirmed(fn) {
        if(window.confirm("項目を削除してもよろしいですか？")) {
          fn();
        }
      };
      confirmed(remove);
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