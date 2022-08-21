// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


// let allSimpsons = document.getElementsByClassName('user')[0]
// for (const person of simpsons) {
//     let div = document.createElement('div')
//     div.classList.add('member')
//     let {name, surname, age, info, photo} = person;
//     let h2 = document.createElement('h2')
//     h2.innerText=`${name} ${surname}
//     age: ${age}`
//     let img = document.createElement('img')
//     let h4 = document.createElement('h4')
//     h4.innerText=info
//     img.src = photo;
//     div.appendChild(h2)
//     div.appendChild(h4)
//     div.appendChild(img)
//
//     allSimpsons.appendChild(div)
// }


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


// let mainDiv = document.createElement('div')
// mainDiv.classList.add('coursesMain')
// document.body.appendChild(mainDiv)
//
// for (const object of coursesArray) {
//     let div = document.createElement('div');
//     div.classList.add('divFlexCourses')
//     mainDiv.appendChild(div);
//     let h2 = document.createElement('h2')
//     h2.style.width = '100%'
//     h2.innerText = object.title;
//
//     let h4Month = document.createElement('h4')
//     h4Month.style.width = '30%'
//     h4Month.innerText = `Month Duration: ${object.monthDuration}`;
//
//     let h4Hour = document.createElement('h4')
//     h4Hour.style.width = '70%'
//     h4Hour.innerText = `Hour Duration: ${object.hourDuration}`;
//
//     div.append(h2, h4Month, h4Hour);
//
//
//     for (const objectKey in object) {
//         if (Array.isArray(object[objectKey])) {
//             let ul = document.createElement('ul')
//             ul.style.width = '100%'
//             ul.innerText = 'Modules:'
//             div.appendChild(ul)
//             for (const element of object[objectKey]) {
//                 let li = document.createElement('li')
//                 li.innerText = element
//                 ul.appendChild(li);
//             }
//         }
//     }
// }





// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let block = document.createElement('div')
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.backgroundColor = 'silver'
// block.style.height = '200px'
// block.style.color = 'yellow';
// block.style.fontSize = '30px'
// block.innerText='OKTEN'
//
//
// document.body.appendChild(block)
//
// let clone = block.cloneNode(true)
// document.body.appendChild(clone)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// let main = document.createElement('div')
// main.classList.add('main')
// document.body.appendChild(main)
// for (const object of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.classList.add('flex')
//     main.appendChild(div);
//     for (const objKey in object) {
//         let h3 = document.createElement('h3')
//         h3.classList.add('h3_style')
//         h3.innerText = `${objKey} - ${object[objKey]}`;
//         div.appendChild(h3);
//     }
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let wrap = document.createElement('div')
// document.body.appendChild(wrap)
// for (const object of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.classList.add('item')
//     wrap.appendChild(div)
//         let {title,monthDuration} = object
//         let h1 = document.createElement('h1')
//         h1.classList.add('heading')
//         h1.innerText = title
//         div.appendChild(h1)
//
//         let p = document.createElement('p');
//         p.classList.add('description');
//         p.innerText = `monthDuration: ${monthDuration}`;
//         div.appendChild(p)
// }


// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// let x = document.createElement('button')
// x.innerText = 'Delete element';
// document.body.appendChild(x);
//
// let y = document.createElement('button')
// y.innerText = 'Add element';
// document.body.appendChild(y);
//
// let randomEl = document.createElement('div');
// randomEl.id = 'text'
// document.body.appendChild(randomEl)
//
// let button1 = document.getElementsByTagName('button')[0];
// let button2 = document.getElementsByTagName('button')[1];
//
// button1.onclick = ()=>{
//     document.body.removeChild(randomEl)
// }
// button2.onclick = ()=>{
//     document.body.appendChild(randomEl)
// }


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let input = document.createElement('input')
// input.name = 'age'
// input.type = 'number'
// input.placeholder = 'Введіть свій вік'
// document.body.appendChild(input)
// let findInput = document.getElementsByTagName('input')[0];
// let button = document.createElement("button")
// button.innerText = 'Check'
// document.body.appendChild(button)
//
// let findButton = document.getElementsByTagName('button')[0];
// findButton.onclick = () => {
//     let age = findInput.value
//     if (age >= 18) {
//         let info1 = document.createElement('h1');
//         info1.innerText = 'Все добре!'
//         document.body.appendChild(info1)
//     }
//     else if (!age || age<18){
//             let info2 = document.createElement('h1');
//             info2.innerText = 'Треба ще підрости!'
//             document.body.appendChild(info2)
//     }
// }


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let divTable = document.createElement('div');
// divTable.classList.add('tableFlex');
// document.body.appendChild(divTable)
//
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// input1.name = 'line'
// input2.name = 'quantity'
// input3.name = 'value'
//
// input1.type = 'number';
// input2.type = 'number';
// input3.type = 'text';
//
// input1.placeholder = 'Введіть кількість рядків'
// input2.placeholder = 'Введіть кількість ячеєк'
// input3.placeholder = 'Введіть вміст ячеєк'
//
// divTable.append(input1, input2, input3);
//
// let button = document.createElement('button')
// button.innerText = 'Click meee';
// document.body.appendChild(button);
//
// button.onclick = () => {
//     let table = document.createElement('table')
//     let line = input1.value;
//     let quantity = input2.value;
//     let value = input3.value
//     if (line && quantity && value) {
//         divTable.appendChild(table)
//         for (let i = 0; i < line; i++) {
//             let tr = document.createElement('tr');
//             table.appendChild(tr)
//             for (let j = 0; j < quantity; j++) {
//                 let td = document.createElement('td')
//                 td.innerText = value;
//                 tr.appendChild(td)
//             }
//         }
//     }
//     else{
//         let h1 = document.createElement('h1')
//         h1.innerText = 'Перевірте правильність введення'
//         divTable.appendChild(h1);
//     }
// }
