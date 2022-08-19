// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {
    let arr = []
    for (let i = 0; i < str.length; i+=n) {
        arr.push(str.slice(i,i+n))
    }
    return arr
};
console.log(cutString('наслаждение', 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const deleteChar = (str, length) => str.slice(0, length);
// console.log(deleteChar('Каждый охотник желает знать', 5));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// const insert_dash = (str) => {
//     const arr = str.split('')
//     console.log(arr)
//     let newArr =[]
//     for (let arrElement of arr) {
//         if (arrElement !== ' ') {
//             newArr.push(arrElement)
//         } else {
//             newArr.push('-')
//         }
//     }
//     return newArr.join('').toUpperCase()
// };
//
// //or
//
// const xxx  = (str)=> str.replaceAll(' ', '-').toUpperCase()
//
//
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str));
// console.log(xxx(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// const firstUpper = (str) => (str[0].toUpperCase() + str.slice(1, str.length));
// console.log(firstUpper('okten'))


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron------Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// -----------------------------------------------------

// let n2 = 'Ron------Whisley'
// const replaceStr = (str) => {
//     let index = [];
//     for (let i = 0; i < str.length; i++) {
//         let strElement = str[i];
//         if(strElement==='-' || strElement==='_' || strElement==='.' || strElement===',' || strElement==='/' || strElement==='&') {
//             index.push(i)
//     }
//     }
//     let result = str.slice(0, index[0]) + ' ' + str.slice(index[index.length-1]+1, str.length - 1);
//     return result
// };
//
// console.log(replaceStr(n2));

//or


// const replaceStr = (str) => {
//     let index = [];
//     let symbol = []
//     for (let i = 0; i < str.length; i++) {
//         let strElement = str[i];
//         if (strElement === '-' || strElement === '_' || strElement === '.' || strElement === ',' || strElement === '/' || strElement === '&') {
//             symbol.push(i);
//         } else {
//             index.push(strElement)
//         }
//
//     }
//     index.splice(symbol[0],0,' ')
//     return index.join('')
// };
//
// console.log(replaceStr(n2));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function random() {
//     const arr = []
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//     }
//     return arr;
// }
//
// console.log(random());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// const sortRandom = random().sort((a, b) => a - b);
// console.log(sortRandom)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// const filterArr = random().filter(value => (!(value % 2) && value !== 0));
// console.log(filterArr);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// const capitalize = (str) => {
//     const arr = str.split(' ');
//     const newArr = []
//     for (let arrElement of arr) {
//         let element = arrElement[0].toUpperCase() + arrElement.slice(1, arrElement.length);
//         newArr.push(element)
//     }
//     return newArr.join(' ')
// };
//
// console.log(capitalize('усім привіт мене звати ярослав'));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// const checkEmail = str => {
//     if (!(str.includes('@'))) {
//         console.log('Введіть нормально пошту');
//     }
//     else {
//         const firstAndSecond = str.split('@')
//         let newArr = firstAndSecond[1].split('.')
//         if (newArr[0].length >= 2 && firstAndSecond[0].length>0) {
//             console.log('Все добре')
//         }
//         else{
//             console.log('Введіть нормально пошту');
//         }
//     }
// };
//
// console.log(checkEmail('someeMAIL@gmail.com'));


// - є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// let arr = coursesArray.sort((a, b) => {
//     if (a.modules.length < b.modules.length) {
//         return 1;
//     }
//     if (a.modules.length > b.modules.length) {
//         return -1;
//     }
//     return 0;
// });
// console.log(arr);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// const count = (str, stringsearch) => str.split('').filter(value => value===stringsearch).length;
// console.log(count("Астрономия это наука о небесных объектах", 'о'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// const cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
//
// let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutString(str, 5));


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).


const arrBooks = [
    {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    pageCount: 455,
    genre: ['Fantasy', 'Detective'],
    authors: [
        {
            name: ['John Ronald Reuel Tolkien'],
            age: 80
        }
    ]
},
    {
        title: 'The Lord of the Rings: The Return of the King',
        pageCount: 400,
        genre: ['Fantasy', 'Detective', 'Adventure'],
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
                name: ['John Ronald Reuel Tolkien', 'xxxxx'],
                age: 80
            }
        ],
    }]

// -знайти наібльшу книжку.
// console.log(arrBooks.sort((a,b)=>{
//     if (a.pageCount<b.pageCount){
//         return 1
//     }
//     if (a.pageCount > b.pageCount) {
//         return -1;
//     } else {
//         return 0;
//     }
// })[0])


