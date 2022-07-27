// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 2, 3, 4, 5, true, false, 'okten', 'web', 'ua'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const firstBook = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 300,
    genre: 'Fantasy'
};

const secondBook = {
    title: 'Harry Potter and the Chamber of Secrets',
    pageCount: 350,
    genre: 'Fantasy'
};

const thirdBook = {
    title: 'Harry Potter and the Deathly Hallows',
    pageCount: 375,
    genre: 'Fantasy'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const firstObject = {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    pageCount: 400,
    genre: 'Fantasy',
    authors: [
        {
            name: 'John Ronald Reuel Tolkien',
            age: 80
        }
    ]
};
console.log(firstObject['authors'][0].name);
const secondObject = {
    title: 'The Lord of the Rings: The Return of the King',
    pageCount: 425,
    genre: 'Fantasy',
    authors: [
        {
            name: 'John Ronald Reuel Tolkien',
            age: 80
        }
    ],
};

const thirdObject = {
    title: 'The Lord of the Rings: The Two Towers',
    pageCount: 450,
    genre: 'Fantasy',
    authors: [
        {
            name: 'John Ronald Reuel Tolkien',
            age: 80
        }
    ],
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
    {
        name: 'Ivan',
        username: 'Ivan123',
        password: 'gret345rfw',
    },
    {
        name: 'Natalia',
        username: 'NAtaLIA7',
        password: '23wefyhwar',
    },
    {
        name: 'Yurii',
        username: 'Yura_cosmos',
        password: 'terdfg5y54645ete',
    },
    {
        name: 'Diana',
        username: 'Princess_di',
        password: 'asfwefse233',
    },
    {
        name: 'Yulia',
        username: 'Yuliaaaa',
        password: '765rtyszsdf',
    },
    {
        name: 'Sofia',
        username: 'SofiaUA',
        password: '432rweffdqq',
    },
    {
        name: 'Karina',
        username: 'Karmen',
        password: 'hhkfkf54442s',
    },
    {
        name: 'Vladislav',
        username: 'Vlad88989',
        password: 'efsdcxdfge564533',

    },
    {
        name: 'Max',
        username: 'Maxon333',
        password: '43rweffgdrhfhfg',
    },
    {
        name: 'Yaroslav',
        username: 'Yaroslav777',
        password: 'lhlhlkhgf3433',
    },
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



for (const user of users) {
    console.log(user.password)
}


