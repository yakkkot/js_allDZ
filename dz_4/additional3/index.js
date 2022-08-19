// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr = []
// for (let i = 0; i < 50; i++) {
//     let x = Math.floor(Math.random() * 100)
//     if (x % 2) {
//         arr.push(x+1)
//     } else {
//         arr.push(x);
//     }
// }
// console.log(arr)


//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arr = []
// for (let i = 0; i < 50; i++) {
//     let x = Math.floor(Math.random() * 100)
//     if (!(x % 2)) {
//         arr.push(x+1)
//     } else {
//         arr.push(x);
//     }
// }
// console.log(arr)


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr = []
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 150))
// }
// console.log(arr)


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = []
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (733 - 8) + 8));
// }
// console.log(arr)


// 2. Вивести за допомогою console.log кожен третій елемен

// let arr = []
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (733 - 8) + 8));
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i+=3) {
//     console.log(arr[i]);
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

let arr = []
for (let i = 0; i < 20; i++) {
    arr.[i(Math.floor(Math.random() * (733 - 8) + 8));
}
console.log(arr);
for (let i = 0; i < arr.length; i+=3) {
    if(!(arr[i]%2)){
        console.log(arr[i]);
    }
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr = []
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (733 - 8) + 8));
// }
// console.log(arr);
// let arrSecond = []
// for (let i = 0; i < arr.length; i+=3) {
//     if(!(arr[i]%2)){
//         console.log(arr[i]);
//         arrSecond.push(arr[i]);
//     }
// }
// console.log(arrSecond)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// const arrRight = (arr)=>{
//     let someArr=[]
//     for (let i = 0; i < arr.length-1; i++) {
//         if(!(arr[i+1]%2)){
//             someArr.push(arr[i])
//         }
//     }
//     return someArr
// }
// const yyy = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// console.log(arrRight(yyy));


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let num = [100, 250, 50, 168, 120, 345, 188];
// const check = (arr) => (arr.reduce((sum, elem) => sum + elem, 0) / arr.length);
// console.log(check(num))
// // or
//
// let sum = 0
// for (const numEl of num) {
//     sum+=numEl
// }
// console.log(sum/num.length)



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let arr = []
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 150))
// }
// console.log(arr)
// let newArr = []
// for (const element of arr) {
//     newArr.push(element * 5);
// }
// console.log(newArr);
//
// // or
// const arrSecond = arr.map(value => value * 5);
// console.log(arrSecond)


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let someArr = [true, 1, 5, 7, 8, false, 'fdsf', 'rewrew', 56543, false];
// let numArr = []
// for (const someArrElement of someArr) {
//     if(typeof someArrElement=== "number") {
//         numArr.push(someArrElement)
//     }
// }
// console.log(numArr)
// //orr
// const filterArr = someArr.filter(value => typeof value === "number");
// console.log(filterArr)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
            // TO BE CONTINUED .....



//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//

// let xxx =[]
// for (const objUsers of usersWithId) {
//     for (const objCities of citiesWithId) {
//         if (objUsers.id === objCities.user_id) {
//             let firstObjStringify = JSON.stringify(objUsers);
//             let firstObjParse = JSON.parse(firstObjStringify);
//
//             let secondObjStringify = JSON.stringify(objCities)
//             let secondObjParse = JSON.parse(secondObjStringify)
//
//             const newObj = Object.assign(firstObjParse, {address: secondObjParse})
//             xxx.push(newObj)
//         }
//     }
// }
// console.log(xxx)



//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 150))
// }
// for (const arrElement of arr) {
//     if (!(arrElement % 2) && arrElement !== 0) {
//         console.log(arrElement);
//     }
// }



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 10))
// }
//
// let newArr = []
// for (const arrElement of arr) {
//     newArr.push(arrElement);
// }
//
// console.log(arr)
// console.log(newArr)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c']
// let word='';
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c']
// let word='';
// let i = 0;
// while(i<arr.length){
//     word += arr[i];
//     i++;
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c']
// let word='';
// for (const wordElement of arr) {
//     word += wordElement;
// }
// console.log(word);
