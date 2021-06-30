// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.

// Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
// число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// в `div#boxes`.

// Каждый созданный div:

// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на
//   10px

// Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.

const inputWrapper = document.querySelector("#controls");
const inputValue = inputWrapper.firstElementChild;
const btnСreate = inputValue.nextElementSibling;
const btnClear = btnСreate.nextElementSibling;
const boxesWrapper = document.querySelector("#boxes");

inputValue.addEventListener("click", onInputValue);

let amount;

function onInputValue(event) {
  amount = +event.target.value;
  return amount;
}

btnСreate.addEventListener("click", function () {
  if (amount === undefined) {
    amount = 0;
  }
  const boxes = createBoxes(amount);
  boxesWrapper.append(...boxes);
});

btnClear.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  return [...Array(amount)]
    .map((acc, idx) => ++idx)
    .map((i) => {
      const sizeRed = getRandomNumber(0, 255);
      const sizeGreen = getRandomNumber(0, 255);
      const sizeBlue = getRandomNumber(0, 255);
      const divBoxes = document.createElement("div");
      divBoxes.style.backgroundColor = `rgb(${sizeRed}, ${sizeGreen}, ${sizeBlue})`;
      divBoxes.style.width = `${(i - 1) * 10 + 30}px`;
      divBoxes.style.height = `${(i - 1) * 10 + 30}px`;
      divBoxes.style.marginTop = `${10}px`;

      return divBoxes;
    });
}

function destroyBoxes() {
  boxesWrapper.innerHTML = "";
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
