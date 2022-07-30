// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Введіть х')
// if(x){
//     console.log('Вірно')
// } else{
//     console.log('Не вірно')
// }
// x !== 0 ? console.log('Вірно') : console.log('Нe Вірно');


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('Введіть від 0 до 59')
// if (time>=0 && time<15){
//     console.log('Перша четверть')
// } else if(time>=15 && time<30){
//     console.log('Друга четверть')
// }else if(time>=30 && time<45){
//     console.log('Третя четверть')
// }else if(time>=45 && time<=59){
//     console.log('Четверта четверть')
// } else {console.log('WTF?')}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('від 1 до 31')
// if (day>=1 && day<11){
//     console.log('Перша декада місяця')
// } else if(day>=11 && day<21){
//     console.log('Друга декада місяця')
// }else if(day>=21 && day<=31){
//     console.log('Третя декада місяця')
// }else {
//     console.log('WTFF');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// const anyDay = +prompt('Розклад. Введи порядковий номер дня тижня')

// switch (anyDay){
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
//     case 7:
//         console.log('Sunday')
//         break;
//     default: console.log('Davai zanovo, shos\' ne to')
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// const firstNumber = +prompt('Введіть перше число');
// const secondNumber = +prompt('Введіть друге число');
//
// if(firstNumber>secondNumber){
//     console.log(firstNumber)
// }else if(secondNumber>firstNumber){
//     console.log(secondNumber)
// } else {console.log('Числа однакові')}
//
//
// firstNumber===secondNumber ? console.log('Числа однакові') : firstNumber>secondNumber ? console.log(firstNumber) : console.log(secondNumber)

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x
// x = '' || 'default';
// console.log(x);
//
// // OR 
// if (!x) {
//     console.log('default')
// }
// console.log(x);