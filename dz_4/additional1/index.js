// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1, 2, 3, 4, 5];
//
// for (const arrElement of numbers) {
//     console.log(arrElement);
// }
// let str = ['abcde', 'ewqe', 'qwe', 'asx', 'ew'];
//
// for (const arrElement of str) {
//     console.log(arrElement);
// }
// let arr = [10, true, false, 'rwerweq', 123];
//
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// const array = []
// for (let i = 0; i < 8; i++) {
//     array[i] = 123 + i;
// }
// console.log(array)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

// let i = 0;
// while (i<numArr.length){
//     console.log(numArr[i])
//     i++
// }

//     2. перебрати його циклом for

// for (let i = 0; i < numArr.length ; i++) {
//     console.log(numArr[i])
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i<numArr.length) {
//     if(i%2) {
//         console.log(numArr[i]);
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < numArr.length; i++) {
//     if(i%2){
//         console.log(numArr[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i<numArr.length) {
//     if (!(numArr[i] % 2)) {
//         console.log(numArr[i]);
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < numArr.length; i++) {
//     if (!(numArr[i] % 2)) {
//         console.log(numArr[i])
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numArr.length; i++) {
//     if (!(numArr[i] % 3)) {
//         numArr[i] = "okten";
//     }
//     document.write(`<h2>${numArr[i]}</h2>`)
//     console.log(numArr[i])
// }

// 8. вивести масив в зворотньому порядку.

// for(let i = numArr.length-1; i>=0; i--){
//     console.log(numArr[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// let i = numArr.length-1;
// while (i >= 0) {
//     console.log(numArr[i]);
//     i--;
// }

// for (let i = numArr.length-1; i>=0; i--) {
//     if(i%2){
//         console.log(numArr[i])
//     }
// }

//
// let i = numArr.length-1;
// while (i>=0) {
//     if (!(numArr[i] % 2)) {
//         console.log(numArr[i]);
//     }
//     i--;
// }


// for (let i = numArr.length-1; i >=0; i--) {
//     if (!(numArr[i] % 2)) {
//         console.log(numArr[i])
//     }
// }


// for (let i = numArr.length - 1; i >= 0; i--) {
//     if (!(numArr[i] % 3)) {
//         numArr[i] = "okten";
//     }
//     document.write(`<h2>${numArr[i]}</h2>`);
//     console.log(numArr[i]);
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of firstArr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let strArr = ['a','b','c','d','e','f','g','h','j','k']
// for (const string of strArr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let someArr = [true, 1, 5, 7, 8, false, 'fdsf', 'rewrew', 56543, false];
// for (const someArrElement of someArr) {
//     console.log(someArrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let someArr = [true, 1, 5, 7, 8, false, 'fdsf', 'rewrew', 56543, false];
// for (const someArrElement of someArr) {
//     if(typeof someArrElement=== "boolean") {
//         console.log(someArrElement);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let someArr = [true, 1, 5, 7, 8, false, 'fdsf', 'rewrew', 56543, false];
// for (const someArrElement of someArr) {
//     if(typeof someArrElement=== "number") {
//         console.log(someArrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let someArr = [true, 1, 5, 7, 8, false, 'fdsf', 'rewrew', 56543, false];
// for (const someArrElement of someArr) {
//     if(typeof someArrElement=== "string") {
//         console.log(someArrElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// const emptyArr = [];
// emptyArr[0] = 12
// emptyArr[1] = 12321
// emptyArr[2] = true
// emptyArr[3] = 'ewq'
// emptyArr[4] = [1,2]
// emptyArr[5] = false
// emptyArr[6] = true
// emptyArr[7] = 14324232
// emptyArr[8] = {name:'Vasya'}
// emptyArr[9] = '423432'
//
// for (const emptyArrElement of emptyArr) {
//     console.log(emptyArrElement);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// document.write(`<h6>${i}</h6>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h6>${i}</h6>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<h6>${i}</h6>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (!(i % 2) && i!==0) {
//         console.log(i);
//         document.write(`<h6>${i}</h6>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ((i % 2) && i!==0) {
//         console.log(i);
//         document.write(`<h6>${i}</h6>`);
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const arrBooks = [ {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    pageCount: 400,
    genre: ['Fantasy','Detective'],
    authors: [
        {
            name: ['John Ronald Reuel Tolkien'],
            age: 80
        }
    ]
},
    {
        title: 'The Lord of the Rings: The Return of the King',
        pageCount: 455,
        genre: ['Fantasy','Detective','Adventure'],
        authors: [
            {
                name: ['John Ronald Reuel Tolkien'],
                age: 80
            }
        ],
    },
    {
        title: 'The Lord of the Rings: The Two Towers',
        pageCount: 450,
        genre: ['Fantasy'],
        authors: [
            {
                name: ['John Ronald Reuel Tolkien','xxxxx'],
                age: 80
            }
        ],
    }]

// -знайти наібльшу книжку.

// function maxPage (arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//     if(arr[i].pageCount>max.pageCount){
//         max = arr[i];
//     }
// }
//     return max;
// }
//
// console.log(maxPage(arrBooks));


// - знайти книжку/ки з найбільшою кількістю жанрів

// function maxGenre (arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].genre.length>max.genre.length){
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// console.log(maxGenre(arrBooks));

// - знайти книжку/ки з найдовшою назвою

// function maxTitle (arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].title.length>max.title.length){
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// console.log(maxTitle(arrBooks));

// - знайти книжку/ки які писали 2 автори


// function maxTitle (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].authors[0].name.length===2){
//             console.log(arr[i])
//         }
//     }
// }
//
// console.log(maxTitle(arrBooks));

// - знайти книжку/ки які писав 1 автор

// function maxTitleSecond (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].authors[0].name.length===1){
//             console.log(arr[i])
//         }
//     }
// }
// console.log(maxTitleSecond(arrBooks));