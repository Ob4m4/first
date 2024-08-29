/*Описание: На странице есть кнопка <button id="toggle-visibility">Переключить видимость</button>
и несколько элементов <div class="content-box"> с текстом "Скрываемый текст".
 Напиши скрипт, который при клике на кнопку будет переключать видимость всех элементов с
  классом content-box. Когда элементы видимы, их текст должен отображаться. Когда элементы скрыты,
   их текст не должен быть виден.

Подсказка: Используй методы getElementsByClassName, style.display, и флаг для отслеживания текущего состояния (видимы элементы или нет).*/

// const divs = document.getElementsByClassName('content-box');
// const btn = document.getElementById('toggle-visibility');
// console.log(divs);
// let isTextVisible = true;

// btn.addEventListener('click', ()=>{
//     for(let div of divs) {
//         if(isTextVisible) {
//             div.style.display = 'none'
//         } else {
//             div.style.display = 'block'
//         }
//     }
//     isTextVisible = !isTextVisible;
// });

/*Описание: На странице есть кнопка <button id="toggle-visibility">Скрыть текст</button> и несколько
 элементов <div class="content-box"> с текстом "Текст для скрытия". Напиши скрипт, который при клике
  на кнопку будет:

Переключать видимость всех элементов с классом content-box.
Менять текст на кнопке в зависимости от текущего состояния (например, если текст видим, на кнопке
 должно быть написано "Скрыть текст", а если скрыт — "Показать текст").
Подсказка: Используй методы getElementsByClassName, style.display, textContent, и флаг для
 отслеживания текущего состояния.*/

// const btn = document.getElementById('toggle-visibility');
// const divs = document.getElementsByClassName("content-box");

// let isContentVisible = true;

// btn.addEventListener('click', ()=>{
//     for(let div of divs) {
//         if (isContentVisible) {
//             btn.textContent = 'Показать текст';
//             div.style.backgroundColor = "#cccccc";
//             div.textContent = '';
//         } else {
//             btn.textContent = 'Скрыть текст';
//             div.textContent = 'Текст для скрытия';
//             div.style.backgroundColor = "rgb(92, 77, 77)";
//         }
//     }
//     isContentVisible = !isContentVisible;
// })
/*Задача: Переключение видимости, изменение текста кнопки, динамическое создание и удаление элементов,
 управление свойствами через JavaScript

Описание: На странице есть кнопка <button id="toggle-visibility">Скрыть текст</button>
 и несколько элементов <div class="content-box"> с текстом "Текст для скрытия". Напиши скрипт, который
  при клике на кнопку будет:

Переключать видимость всех элементов с классом content-box.
Менять текст на кнопке в зависимости от текущего состояния (если текст видим, на кнопке
 должно быть написано "Скрыть текст", а если скрыт — "Показать текст").
Динамически добавлять новый элемент <div class="content-box"> с текстом "Новый элемент"
 в конец списка при каждом нажатии на кнопку. Новый элемент должен также подчиняться
  всем правилам видимости и изменений.
При каждом пятом клике на кнопку удалять последний элемент из списка.
Изменять цвет текста на случайный цвет при каждом нажатии на кнопку.
Подсказка: Используй методы getElementsByClassName, createElement, appendChild, removeChild,
 и управляй состоянием через переменные и флаги. Также подумай, как генерировать случайные
  цвета в JavaScript.*/

// const btn = document.getElementById('toggle-visibility');
// const divs = document.getElementsByClassName('content-box');
// const newDiv = document.createElement('div');

// let isTextVisible = true;

// btn.addEventListener('click', ()=>{
//     for(let div of divs) {

//         newDiv.textContent = 'Новый элемент';
//         newDiv.setAttribute("class", "content-box");
//         div.parentNode.appendChild(newDiv);
//         if(divs.length = 8) {
//             div.parentNode.removeChild(divs.length - 1);
//         } else if (isTextVisible) {
//             btn.textContent = 'Показать текст';

//         }
//     }
// })
/*Задача 7: Создание и добавление кнопок
Описание: На странице есть контейнер <div id="button-container"></div>. Напиши скрипт, который
 создаст и добавит в этот контейнер три кнопки с текстом "Кнопка 1", "Кнопка 2", "Кнопка 3".
  Каждая кнопка должна иметь обработчик события, который при нажатии выводит в консоль
   текст кнопки.
Подсказка: Используй методы createElement, appendChild, и addEventListener.*/

// const div = document.getElementById('button-container');

// function btnCreater (num){
//     const btn = document.createElement('button');
//     div.appendChild(btn);
//     btn.textContent = `Кнопка ${num}`;
//     btn.addEventListener('click', ()=>{
//         console.log(btn.textContent);
//     })
// };
// btnCreater(1);
// btnCreater(2);
// btnCreater(3);

/*Задача 8: Переключение видимости элемента
Описание: На странице есть элемент <div id="toggle-box">Скрытый текст</div> и кнопка
 <button id="toggle-button">Скрыть/Показать</button>. Напиши скрипт, который будет
  переключать видимость элемента <div> при нажатии на кнопку.

Подсказка: Используй методы getElementById, style.display, и addEventListener.*/

//  const btn = document.getElementById("toggle-button");
//     const div = document.getElementById("toggle-box");
//     let isTextVisible = true;

//     btn.addEventListener('click', ()=>{
//         if(isTextVisible) {
//             div.style.display = 'none';
//         } else {
//             div.style.display = 'block'
//         }
//         isTextVisible = !isTextVisible
//     });

/*Задача 9: Перемещение элемента
Описание: На странице есть два контейнера <div id="container1"></div> и <div id="container2"></div>.
 Напиши скрипт, который переместит элемент из container1 в container2 при клике на него.

Подсказка: Используй методы getElementById, appendChild, и addEventListener.*/

// const div1 = document.getElementById("container1");
// const div2 = document.getElementById("container2");
// const btn = document.getElementById("toggle-button");

// div1.addEventListener('click', ()=>{
//     div2.appendChild(btn)
// });

// div2.addEventListener('click', ()=>{
//     div1.appendChild(btn)
// });
/*Описание: Создай на странице элемент <div id="countdown">10</div>. Напиши скрипт, который будет уменьшать значение внутри этого элемента на единицу каждую секунду, пока оно не достигнет нуля.

Подсказка: Используй методы getElementById и setInterval.

Попробуй решить эти задачи, и если у тебя возникнут вопросы или сложности, я с радостью помогу!*/

// const section = document.getElementsByTagName("section")[0];
// const div = document.createElement("div");
// section.appendChild(div);
// div.id = "countdown";
// div.textContent = 10;

// setInterval(() => {
//   if (div.textContent === 0) {
//     clearInterval()
//   } else {
//     div.textContent -= 1;
//   }
// }, 1000);

// // Задача 1: Динамическое отображение текущего времени
// // Описание: Создай элемент <div> на странице, который будет показывать текущее время (часы, минуты, секунды)
// //  и обновляться каждую секунду. Время должно обновляться в формате HH:MM:SS.

// // Подсказка: Используй setInterval для обновления времени каждую секунду.

// const section = document.getElementsByTagName("section")[0];
// const div = document.createElement('div');
// section.appendChild(div);
// setInterval(()=>{
//     div.textContent = Date();

// },1000);

// Задача 2: Прогресс-бар с таймером
// Описание: Создай элемент <div id="progress-bar"></div> на странице, который будет работать как прогресс-бар.
//  Прогресс-бар должен заполняться в течение 10 секунд и останавливаться, когда будет полностью заполнен.

// Подсказка: Используй setInterval для увеличения ширины прогресс-бара с течением времени.

// Задача 3: Обратный отсчёт с кнопкой паузы
// Описание: Создай элемент <div id="timer"></div>, который будет выполнять обратный отсчёт с 20 до 0.
//  Добавь кнопку "Пауза", которая будет останавливать отсчёт при нажатии, и кнопку "Продолжить", которая будет
//   возобновлять его.

// // Подсказка: Используй setInterval и clearInterval для управления таймером, а также обработчики
//  событий для кнопок.

// const section = document.getElementsByTagName('section')[0];
// const div = document.createElement('div');
// div.id = 'timer'
// section.appendChild(div);
// div.textContent = 20;

// const btnPause = document.createElement('button');
// btnPause.textContent = 'Пауза';
// section.appendChild(btnPause);
// btnPause.addEventListener('click', ()=>{

// })

// const btnPlay = document.createElement('button');
// btnPlay.textContent = 'Продолжить'
// section.appendChild(btnPlay);
// btnPlay.addEventListener('click', ()=>{})

// let countdown = setInterval(()=>{
//     if(Number(div.textContent) === 0) {
//         clearInterval(countdown)
//     } else {
//         div.textContent = Number(div.textContent) - 1
//     }
// },1000);

// Задача 4: Анимация текста
// Описание: Создай элемент <div id="animated-text">Текст</div>, который будет перемещаться
//  слева направо по странице в течение 5 секунд. После достижения правого края текст должен вернуться
//   в исходное положение и начать движение заново.

// Подсказка: Используй setInterval для изменения позиции left с течением времени.

// Задача 5: Автоматическая смена изображений
// Описание: Создай слайдер изображений. Создай элемент <img id="slider">, и три изображения в массиве.
//  Изображения должны автоматически меняться каждую секунду. Когда достигнуто последнее изображение,
//   слайдер должен начинаться с первого изображения.

// Подсказка: Используй массив для хранения путей изображений и setInterval для автоматической смены.

// Задача 6: Секундомер
// Описание: Создай элемент <div id="stopwatch">00:00</div> и две кнопки: "Старт" и "Сброс".
//  При нажатии на "Старт", секундомер должен начать отсчёт времени в формате MM:SS.
//   Кнопка "Сброс" должна останавливать отсчёт и сбрасывать время до 00:00.

// Подсказка: Используй setInterval для отсчёта времени и clearInterval для остановки таймера.

// Задача 7: Задержка появления текста
// Описание: Создай элемент <div id="delayed-text">Привет!</div>, который изначально скрыт.
//  Сделай так, чтобы текст в элементе появился на экране через 5 секунд после загрузки страницы.

// Подсказка: Используй setTimeout для задержки отображения текста.

// Задача 8: Последовательное изменение цвета фона
// Описание: Создай элемент <div id="color-box"></div> и массив с разными цветами.
//  Сделай так, чтобы цвет фона этого элемента менялся последовательно на следующий цвет из массива каждые 2 секунды.
//   Когда массив цветов закончится, цвет должен начать меняться с первого элемента массива.

// Подсказка: Используй массив для хранения цветов и setInterval для изменения цвета.

// Задача 9: Обратный отсчёт до действия
// Описание: Создай элемент <div id="action-countdown">10</div> и кнопку "Запустить".
//  Когда пользователь нажимает на кнопку, запускается обратный отсчёт с 10 до 0. Когда счётчик достигает 0,
//   на экране должно появиться сообщение "Действие выполнено!".

// Подсказка: Используй setTimeout или setInterval для создания обратного отсчёта.

// Задача 10: Бегущая строка
// Описание: Создай элемент <div id="marquee">Это бегущая строка!</div>, который будет
//  перемещаться справа налево по экрану. Когда текст полностью исчезает слева,
//   он должен снова появляться справа.

// Подсказка: Используй setInterval и изменяй позицию текста, используя свойства CSS position и left.

// const arr = [1, 2, 3, 4, 5, 6,]
/*Сумма всех элементов массива.
Дан массив чисел [5, 10, 15, 20, 25]. Используй forEach, чтобы найти сумму всех чисел в массиве.*/

// const arr = [5, 10, 15, 20, 25];
// let res = 0;
// arr.forEach((elem)=>{
//     res = elem + res

// });
// console.log(res);

/*Подсчёт количества элементов в массиве.
Дан массив ['a', 'b', 'a', 'c', 'a', 'b']. Используй forEach, чтобы посчитать, сколько раз символ 'a'
 встречается в массиве.*/

//  let arr = ["a", "b", "a", "c", "a", "b"];
//  let res = 0
//  arr.forEach((elem)=>{
//     if (elem === 'a') {
//         res++}
//  });
//  console.log(res);

/*Умножение всех чисел на 2.
Дан массив чисел [1, 2, 3, 4, 5]. Используй map, чтобы создать новый массив, где каждое число умножено на 2.*/

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map ((elem)=>{
//     return elem * 2
// });
// console.log(newArr);

/*Изменение регистра букв.
У тебя есть массив строк ['hello', 'world', 'javascript']. Используй map, чтобы создать новый массив,
 где каждая строка будет записана заглавными буквами.*/
// const arr = ["hello", "world", "javascript"];
// const newArr = arr.map((elem)=>{
//     return elem.toUpperCase()
// });
// console.log(newArr);

/*Добавление символа к строкам.
Дан массив строк ['cat', 'dog', 'fish']. Используй map, чтобы создать новый массив,
 где к каждой строке добавляется символ !. Например, из 'cat' получится 'cat!'.*/
//  const arr = ["cat", "dog", "fish"];
//  const newArr = arr.map((elem)=>{
//     return elem + '!'
//  });
//  console.log(newArr);
/*
Отлично! Вот несколько задач посложнее, чтобы закрепить методы map и forEach.

Задачи на метод forEach:
Подсчёт суммы длины всех строк.
Дан массив строк ["apple", "banana", "cherry", "date"]. Используй forEach, 
чтобы найти общую длину всех строк в массиве.*/
// const arr = ["apple", "banana", "cherry", "date"];
// let res = 0;
// arr.forEach((elem)=>{
//     res = elem.length + res
// });
// console.log(res);
/*Фильтрация чисел.
Дан массив чисел [12, 5, 8, 130, 44]. Используй forEach, чтобы создать новый массив,
 содержащий только числа, которые больше 10.*/
//  const arr = [12, 5, 8, 130, 44];
//  const newArr =[];
//  arr.forEach((elem)=>{
//     if(elem >= 10) {
//         newArr.push(elem)
//     }
//  });
//  console.log(newArr);
/*Возведение чисел в квадрат и фильтрация.
Дан массив чисел [1, 4, 9, 16, 25]. Используй map, чтобы создать новый массив, в котором
 все числа возведены в квадрат. Затем отфильтруй массив, оставив только числа больше 100.*/

//  const arr = [1, 4, 9, 16, 25];
//  let newArr = arr.map((elem)=>{
//     return elem**2
//  });
//  let arr3 = [];
//  newArr.forEach((elem)=>{
//     if(elem > 100) {
//         arr3.push(elem);
//     }
//  })
//  console.log(arr3);

// const arr = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// const newArr = arr.map((elem)=>{
//     return `${elem.name} is ${elem.age} years old`
// });
// console.log(newArr);

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
//   { name: "Eve", age: 35 },
// ];
// const obj = {};
// people.forEach((elem)=>{
//     if (elem.age )
// });
/*Дан массив строк: ["hello", "world", "javascript", "is", "awesome"]. Используй forEach,
 чтобы подсчитать общее количество гласных (a, e, i, o, u) во всех строках массива.*/
// let arr = ["hello", "world", "javascript", "is", "awesome"];

// let count = 0;
// arr.forEach((elem) => {
//   for(let letter of elem) {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       count++;
//     }
//   }
// });

// console.log(count);

// const names = ["Alice", "Bob", "Charlie"];
// const scores = [85, 92, 78];

// const newArr = names.map((name, i)=>{
//    return Object (`name: ${name}, score: ${scores[i]}`)
// });
// console.log(newArr);

/*Фильтрация чётных чисел:
Дан массив чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Используй метод filter,
 чтобы создать новый массив, содержащий только чётные числа.*/

//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let newArr = arr.filter((elem)=> {
//     if(elem % 2 === 0){
//       return elem
//     }
//  });
//  console.log(newArr);

/*Поиск числа больше 50:
Дан массив чисел [10, 25, 38, 45, 62, 70, 15]. Используй метод find,
 чтобы найти первое число, которое больше 50.*/
//  const arr = [10, 25, 38, 45, 62, 70, 15];
//  let newArr = arr.find((num)=>{
//   if (num > 50) {
//     return num
//   }
//  });
//  console.log(newArr);

/*Фильтрация строк по длине:
Дан массив строк ["apple", "banana", "cherry", "date", "fig"]. Используй метод filter,
 чтобы создать новый массив, содержащий только строки длиной больше 4 символов.*/
//  const arr = ["apple", "banana", "cherry", "date", "fig"];
//  let newArr = arr.filter((elem)=>{
//   if (elem.length > 4) {
//     return elem
//   }
//  });
//  console.log(newArr);

/*Поиск слова, начинающегося с определённой буквы:
Дан массив строк ["car", "bike", "bus", "train", "boat"]. Используй метод find,
 чтобы найти первое слово, которое начинается с буквы 'b'.*/
// const arr = ["car", "bike", "bus", "train", "boat"];
// let newArr = arr.find(word => word.startsWith('b'))
// console.log(newArr);

/*Фильтрация объектов по возрасту:
У тебя есть массив объектов, представляющих людей:

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 17 },
    { name: "David", age: 21 },
    { name: "Eve", age: 18 }
];
Используй метод filter, чтобы создать новый массив, содержащий только тех людей, которым больше 20 лет.*/

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 17 },
//   { name: "David", age: 21 },
//   { name: "Eve", age: 18 },
// ];
// let older20 = people.filter(person => person.age > 20);
// console.log(older20);

/*Поиск товара по цене:
У тебя есть массив объектов, представляющих товары:

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 750 },
    { name: "Monitor", price: 300 }
];
Используй метод find, чтобы найти первый товар, который стоит больше 600.*/

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
//   { name: "Monitor", price: 300 },
// ];

// let priceOver600 = products.find(product => product.price > 600);
// console.log(priceOver600);

/*У тебя есть массив объектов, представляющих заказы в магазине. Каждый объект
 содержит информацию о заказе, включая id, пользователя и сумму. Найди первый заказ,
  который был сделан пользователем с именем "Иван" и сумма которого превышает 1000.

const orders = [
  { id: 1, user: 'Алексей', amount: 500 },
  { id: 2, user: 'Иван', amount: 1500 },
  { id: 3, user: 'Мария', amount: 200 },
  { id: 4, user: 'Иван', amount: 800 },
];*/
// const orders = [
//   { id: 1, user: "Алексей", amount: 500 },
//   { id: 2, user: "Иван", amount: 1500 },
//   { id: 3, user: "Мария", amount: 200 },
//   { id: 4, user: "Иван", amount: 800 },
// ];

// let findOrder = orders.find(order=>order.user === 'Иван' && order.amount > 1000);
// console.log(findOrder);

/*У тебя есть массив объектов, представляющих события в календаре. Каждое событие имеет дата,
 время и название. Тебе нужно отфильтровать все события, которые происходят в текущем месяце
  и имеют название, содержащее слово "собрание".

const events = [
  { date: '2024-08-05', time: '10:00', title: 'Встреча по проекту' },
  { date: '2024-08-15', time: '14:00', title: 'Совещание с командой' },
  { date: '2024-09-10', time: '09:00', title: 'Открытие нового офиса' },
  { date: '2024-08-25', time: '11:00', title: 'Ежемесячное собрание' },
];
*/
// const events = [
//   { date: "2024-08-05", time: "10:00", title: "Встреча по проекту" },
//   { date: "2024-08-15", time: "14:00", title: "Совещание с командой" },
//   { date: "2024-09-10", time: "09:00", title: "Открытие нового офиса" },
//   { date: "2024-08-25", time: "11:00", title: "Ежемесячное собрание" },
// ];
// let eventsFilter = events.filter((event)=>{
//   if (event.date.includes('2024-08') && event.title.includes('собрание'))
//   return event
// });
// console.log(eventsFilter);

/*1. Поиск самого дорогого товара:
У тебя есть массив объектов, представляющих товары:


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 750 },
    { name: "Monitor", price: 300 },
    { name: "Desktop", price: 1500 }
];
Используй комбинацию методов map, filter, и find, чтобы найти самый дорогой товар,
 который стоит больше 700, и вернуть его имя.*/

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
//   { name: "Monitor", price: 300 },
//   { name: "Desktop", price: 1500 },
// ];
// const mostExpensive = products.filter((product) => {
//  if(product.price > 700)
//  return(product)

// })
// console.log(mostExpensive);

/*У тебя есть массив объектов, представляющих людей:

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 17 },
    { name: "David", age: 21 },
    { name: "Eve", age: 18 }
];
Используй комбинацию методов filter и reduce, чтобы найти сумму 
возрастов всех людей, которым 18 лет и больше.*/
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 17 },
//   { name: "David", age: 21 },
//   { name: "Eve", age: 18 },
// ];
// let ageFilter = people.filter(elem => elem.age > 18);
// let ageSumm = ageFilter.reduce((acc, elem)=>{
//   return acc + elem.age
// }, 0);
// console.log(ageSumm);

/*3. Создание строки из определённых слов:
Дан массив строк:

javascript
Копировать код
const words = ["tree", "house", "car", "bicycle", "apple", "phone"];
Используй filter и map, чтобы создать строку, содержащую только те слова, которые
 начинаются с буквы 'a' или 'b', при этом каждое слово должно быть записано
  заглавными буквами. Например, из массива выше должно получиться: "BICYCLE, APPLE, BICYCLE".*/

// const words = ["tree", "house", "car", "bicycle", "apple", "phone"];
// const filteredWords = words.filter(word => word.startsWith('a') || word.startsWith('b'));

// const toUpp = filteredWords.map (word => word.toUpperCase());
// console.log(toUpp);

/*4. Подсчёт уникальных значений в массиве:
Дан массив чисел:

javascript
Копировать код
const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 9, 9];
Используй forEach и объект для подсчёта, чтобы найти, сколько раз каждое число встречается в массиве.
 Результатом должен быть объект, где ключи — это числа, а значения — количество их появлений в массиве.
  Например: {1: 1, 2: 2, 3: 1, 4: 3, 5: 1, 6: 2, 7: 1, 8: 1, 9: 2}.*/

// const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 9, 9];
// let newObj = {};
// numbers.forEach((number)=>{
//   if(number.include newObj = newObj + `${number.index}: ${number.velue}`
// })
// console.log(newObj);

/*5. Сортировка массива объектов:
Дан массив объектов:

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 95 },
    { name: "Eve", grade: 88 }
];
Используй sort и map, чтобы отсортировать студентов по их оценкам в порядке убывания и создать
 новый массив строк, где каждый элемент — это имя студента и его оценка, например: "David: 95".*/

//  const students = [
//    { name: "Alice", grade: 85 },
//    { name: "Bob", grade: 92 },
//    { name: "Charlie", grade: 78 },
//    { name: "David", grade: 95 },
//    { name: "Eve", grade: 88 },
//  ];
// students.sort((studetnA, studentB)=>{
//     return studentB.grade - studetnA.grade
//  });
//   let studentsArr = students.map ((student)=> {
//   return `${student.name}: ${student.grade}.`
//  })
// console.log(studentsArr);

/*Сортировка студентов по алфавиту и создание строки: У тебя есть массив объектов, представляющих студентов:

javascript
Копировать код
const students = [
    { name: "Charlie", grade: 78 },
    { name: "Alice", grade: 85 },
    { name: "Eve", grade: 88 },
    { name: "Bob", grade: 92 },
    { name: "David", grade: 95 }
];
Используй методы sort и map, чтобы отсортировать студентов по именам в алфавитном порядке
 и создать строку, содержащую их имена, разделённые запятыми.*/

//  const students = [
//    { name: "Charlie", grade: 78 },
//    { name: "Alice", grade: 85 },
//    { name: "Eve", grade: 88 },
//    { name: "Bob", grade: 92 },
//    { name: "David", grade: 95 },
//  ];

// students.sort((a, b) => a.name.localeCompare(b.name))
// let names = students.map(student => student.name);
// let str = names.join(', ');
// console.log(str);

/*Экстра сложные задачи
Создание списка уникальных имён: Дан массив строк, представляющих имена:

javascript
Копировать код
const names = ["Alice", "Bob", "Charlie", "Alice", "Bob", "Eve", "David"];
Используй метод forEach и объект для подсчёта, чтобы создать массив, содержащий только уникальные имена,
 то есть каждое имя должно встречаться в итоговом массиве только один раз.*/

// const names = ["Alice", "Bob", "Charlie", "Alice", "Bob", "Eve", "David"];
// names.sort((a, b) => a.localeCompare(b));
// let newArr = [];
// names.forEach((name) => {
//   if (!newArr.includes(name)) {
//     newArr.push(name);
//   }
// });
// console.log(newArr);

/*Фильтрация и преобразование объектов: У тебя есть массив объектов, представляющих книги:

javascript
Копировать код
const books = [
    { title: "Book A", pages: 150 },
    { title: "Book B", pages: 200 },
    { title: "Book C", pages: 300 },
    { title: "Book D", pages: 90 }
];
Используй методы filter и map, чтобы создать новый массив объектов, где будут только
 те книги, у которых количество страниц больше 100, и в каждом объекте должно быть новое
  свойство summary, содержащее строку формата "Title: X, Pages: Y".*/

// const books = [
//   { title: "Book A", pages: 150 },
//   { title: "Book B", pages: 200 },
//   { title: "Book C", pages: 300 },
//   { title: "Book D", pages: 90 },
// ];
// let booksFiltered = books.filter((book)=>{
//   return book.pages >= 100;
// });
// let newBooks = booksFiltered.map((book) =>{
//   return book
// });
// console.log(newBooks);

/*3. Создание строки из имён авторов, отсортированных по длине:
У тебя есть массив строк, представляющих имена авторов:

javascript
Копировать код
const authors = ["Tolkien", "Rowling", "Lewis", "Orwell", "Austen", "Hemingway"];
Используй методы sort, map, и join, чтобы создать строку, содержащую имена авторов, отсортированные по
 длине в порядке возрастания, и разделённые запятыми.
*/
// const authors = [
//   "Tolkien",
//   "Rowling",
//   "Lewis",
//   "Orwell",
//   "Austen",
//   "Hemingway",
// ];
// authors.sort((a, b)=>{
//   return a.length - b.length
// })
// console.log(authors);
// let str = authors.join(', ')
// console.log(str);

/*4. Создание списка уникальных категорий товаров:
Дан массив объектов, представляющих товары с их названиями и категориями:

javascript
Копировать код
const items = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Shoes", category: "Clothing" },
    { name: "Tablet", category: "Electronics" },
    { name: "Pants", category: "Clothing" }
];
Используй методы map, filter, и Set, чтобы создать массив уникальных категорий товаров.
*/

// const items = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Shirt", category: "Clothing" },
//   { name: "Shoes", category: "Clothing" },
//   { name: "Tablet", category: "Electronics" },
//   { name: "Pants", category: "Clothing" },
// ];

// let electronics = items.filter((item)=>{
//   return item.category === "Electronics";
// });
// let clothing = items.filter((item)=>{
//   return item.category === "Clothing";
// });
// console.log(clothing);

/*5. Группировка студентов по их оценкам:
Дан массив объектов, представляющих студентов и их оценки:

javascript
Копировать код
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Eve", grade: "B" }
];
Используй метод reduce, чтобы сгруппировать студентов по их оценкам.
 В результате должен получиться объект, где ключи — это оценки (например, "A", "B", "C"),
  а значения — массивы имён студентов с соответствующей оценкой.*/

  // const students = [
  //   { name: "Alice", grade: "A" },
  //   { name: "Bob", grade: "B" },
  //   { name: "Charlie", grade: "A" },
  //   { name: "David", grade: "C" },
  //   { name: "Eve", grade: "B" },
  // ];
  // let 

  // ============================================== деструктуризация =================================
/*Задача 1:
У тебя есть строка "кот, собака, птица". Используй split, чтобы разделить эту строку
 на отдельные слова и сохрани их в массив.
*/
// let str = "кот, собака, птица";
// let arr = str.split(', ');
// console.log(arr);
/*Задача 2:
У тебя есть строка "123-456-789". Раздели эту строку на части, используя дефис (-) как разделитель.
*/
// let str = "123-456-789";
// let arr = str.split ('-');
// console.log(arr);

/*Задача 3:
Есть строка "hello world". Раздели эту строку на отдельные символы.
*/
// let str = "hello world";
// let arr = str.split('');
// console.log(arr);

/*Задача 4:
Дана строка "яблоко, апельсин, банан, виноград". Раздели строку на три части.
 */ 
// let str = "яблоко, апельсин, банан, виноград";
// let arr = str.split(',', 3);
// console.log(arr);
/*Задача 5:
У тебя есть строка: "Кот:Мяу; Собака:Гав; Птица:Чирик". Нужно разделить эту строку на массив,
 в котором каждая часть будет содержать отдельно животное и его звук, например,
  ["Кот", "Мяу"]. Используй метод split дважды, чтобы достичь этой цели.*/

// let str = "Кот:Мяу; Собака:Гав; Птица:Чирик";
// let arr = str.split('; ');
// console.log(arr);
// let str2 = arr.join(', ');
// let arr2 = str2.split(': ')
// console.log(arr2);

// let [firstName, surname] = "Ilya Kantor".split(" ");
// console.log(firstName);
// let user = {};
// let [surname, name] = "Гордеев Евгений".split(' ');
// user.name = name;
// user.surname = surname;
// console.log(user);

/*Задача 1: Извлечение данных из объекта
Условие: У тебя есть объект person, содержащий информацию о человеке.
 Используя деструктурирующее присваивание, извлеки значения свойств name и age в отдельные переменные.

javascript
Копировать код
const person = {
  name: "Анна",
  age: 28,
  city: "Москва",
  occupation: "Инженер"
};

// Твой код здесь
Ожидаемый результат:

javascript
Копировать код
console.log(name); // "Анна"
console.log(age);  // 28
*/
const person = {
  name: "Анна",
  age: 28,
  city: "Москва",
  occupation: "Инженер",
};
let{age, name} = person;
