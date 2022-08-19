// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArr = []
userArr.push(new User(1, 'Yaroslav', 'Kot', 'xxxxx@gmail.com', '0661112231'));
userArr.push(new User(22, 'Vlad', 'Tkachenko', 'yyyyy@gmail.com', '0661112232'));
userArr.push(new User(3, 'Dima', 'Vovk', 'zzzzzzz@gmail.com', '0661112233'));
userArr.push(new User(423, 'Ivan', 'Borsh', 'gggggg@gmail.com', '0661112234'));
userArr.push(new User(53, 'Natalia', 'Boiko', 'ffffff@gmail.com', '0661112235'));
userArr.push(new User(6, 'Yulia', 'Gorodys', 'ddddd@gmail.com', '0661112236'));
userArr.push(new User(721, 'Olha', 'Melnik', 'ssadas@gmail.com', '0661112237'));
userArr.push(new User(83333, 'Bogdan', 'Ivanov', 'eqwewq@gmail.com', '0661112238'));
userArr.push(new User(9232, 'Yurii', 'Zinchenko', 'rrwertretre@gmail.com', '0661112239'));
userArr.push(new User(10, 'Bogdan', 'Lankov', 'rwerew@gmail.com', '0661112240'));
// console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(userArr.filter(value => !(value.id % 2)));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(userArr.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}


// створити пустий масив, наповнити його 10 об'єктами Client

// let clientsArr = []
// let client1 = new Client(1, 'Yaroslav', 'Kot', 'xxxxx@gmail.com', '0661112231', ['kartoplya']);
// let client2 = new Client(22, 'Vlad', 'Tkachenko', 'yyyyy@gmail.com', '0661112232', ['kartoplya', 'buryak']);
// let client3 = new Client(3, 'Dima', 'Vovk', 'zzzzzzz@gmail.com', '0661112233', ['kartoplya', 'buryak', 'banan']);
// let client4 = new Client(423, 'Ivan', 'Borsh', 'gggggg@gmail.com', '0661112234', ['kartoplya', 'buryak', 'banan', 'orange']);
// let client5 = new Client(53, 'Natalia', 'Boiko', 'ffffff@gmail.com', '0661112235', ['buryak', 'banan']);
// let client6 = new Client(6, 'Yulia', 'Gorodys', 'ddddd@gmail.com', '0661112236', ['banan']);
// let client7 = new Client(721, 'Olha', 'Melnik', 'ssadas@gmail.com', '0661112237', ['kartoplya', 'buryak', 'banan']);
// let client8 = new Client(83333, 'Bogdan', 'Ivanov', 'eqwewq@gmail.com', '0661112238', ['kartoplya', 'buryak', 'banan']);
// let client9 = new Client(9232, 'Yurii', 'Zinchenko', 'rrwertretre@gmail.com', '0661112239', ['buryak']);
// let client10 = new Client(10, 'Bogdan', 'Lankov', 'rwerew@gmail.com', '0661112240', ['kartoplya', 'banan']);
//
// clientsArr.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(clientsArr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clientsArr.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     }
//     this.info = function () {
//         let obj = {
//             model,
//             producer,
//             year,
//             maxSpeed,
//             volume
//         }
//         for (const objKey in obj) {
//             console.log(`${objKey} - ${obj[objKey]}`)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// let firstCar = new Car('M5', 'BMW', 2022, 400, 5);


// console.log(firstCar);
// firstCar.drive();

// firstCar.info()

// firstCar.increaseMaxSpeed(20);
// console.log(firstCar);


// firstCar.changeYear(2020);
// console.log(firstCar);

// firstCar.addDriver({name:'vasya', year: 20})
// console.log(firstCar.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     }
//
//     info() {
//         for (const argumentsKey in this) {
//             console.log(`${argumentsKey} - ${this[argumentsKey]}`)
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
//
// let firstCar = new Car('M5', 'BMW', 2022, 400, 5);
//
// console.log(firstCar)
// firstCar.changeYear(2010);
//
// console.log(firstCar);
// firstCar.addDriver({name:'vasya', year: 30})
// console.log(firstCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arr = [];
let cinderella1 = new Cinderella('Olya', 20, 38);
let cinderella2 = new Cinderella('Natali', 22, 35);
let cinderella3 = new Cinderella('Oksana', 24, 41);
let cinderella4 = new Cinderella('Diana', 25, 36);
let cinderella5 = new Cinderella('Olha', 22, 40);
let cinderella6 = new Cinderella('Maryana', 18, 39);
let cinderella7 = new Cinderella('Iryna', 19, 36);
let cinderella8 = new Cinderella('Nadia', 21, 38);
let cinderella9 = new Cinderella('Anna', 20, 37);
let cinderella10 = new Cinderella('Victoria', 25, 39);
arr.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);

console.log(arr);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella{
    constructor(name,age,sizeShoes) {
        super(name,age);
        this.sizeShoes=sizeShoes
    }
}

let prince1 = new Prince('Ivan', 26, 37);
console.log(prince1);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const findCinderella = (arr,prince)=>{
    for (const arrElement of arr) {
        if(arrElement.footSize===prince.sizeShoes){
            return arrElement
        }
    }
}
console.log(findCinderella(arr, prince1));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(arr.find(value => value.footSize === prince1.sizeShoes));
