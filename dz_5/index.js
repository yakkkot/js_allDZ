// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const area = (a, b) => a * b;
// console.log(area(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle (radius){
//     return Math.PI * Math.pow(radius, 2);
// }
//
// console.log(areaCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const areaCylinder = function (h,r){
//     return (2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2));
// }
// console.log(areaCylinder(3, 8));

// - створити функцію яка приймає масив та виводить кожен його елемент

// const arrPrinter = arr => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// };
// const arr = [1, 2, 3, 4, 5, 6];
// arrPrinter(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const paragraph = str => document.write(`<p>${str}</p>`);
// paragraph('JS JS JS');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const ulLI = strLi =>{
//     document.write(`<ul>
// <li>${strLi}</li>
// <li>${strLi}</li>
// <li>${strLi}</li>
// </ul>`)
// }
//
// ulLI('Okten!')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const ulLI = (strLi,number) =>{
//     document.write(`<ul>`)
// for (let i = 0; i < number; i++) {
//   document.write(`<li>${strLi}</li>`)
// }
//     document.write(`</ul>`)
// }
//
// ulLI('Okten!', 2);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const arrList = arr => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// arrList([1, 3, 5, true, false, '321312', 'Okten']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function objElementPrinter (arr){
//     for (const object of arr) {
//         document.write(`<div>`)
//         for (const objectKey in object) {
//             document.write(`${objectKey} - ${object[objectKey]}; `)
//         }
//         document.write(`</div>`)
//     }
// }
//
// const arr = [
//     {
//         id: 1,
//         name: 'Vasya',
//         age: 21
//     },
//     {
//         id: 2,
//         name: 'Vasya',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Vasya',
//         age: 25
//     }
// ];
//
// objElementPrinter(arr);

// - створити функцію яка повертає найменьше число з масиву

// const arr = [54, 2, 53, 88, 1, 4, -2];
// const min = arr => {
//     let minEl = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(minEl>arr[i]) {
//             minEl = arr[i]
//         }
//     }
//     return minEl;
// };
//
// console.log(min(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const arr = [54, 2, 53, 88, 1, 4, -2];
// const arrSecond = [1, 2, 10];
//
// const sumElArrFirst = function (arr){
//     let sum = 0;
//     for (const sumElement of arr) {
//         sum += sumElement;
//     }
//     return sum;
// }
//
// //or
//
// const sumElArrSecond = function (arr){
//     const sum = arr.reduce((sum, element) => sum + element, 0);
//     return sum;
// }
// console.log(sumElArrFirst(arr));
// console.log(sumElArrFirst(arrSecond));
//
// console.log(sumElArrSecond(arr));
// console.log(sumElArrSecond(arrSecond));