// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mass = ['lilya', 'tanya', 'kristi', 'nastya', 'katya', 'oleh', 'kolya', 'vania', 'maks', 'tolik'];
console.log(mass);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let objs1 = {
        title: 'The 7 Habits of Highly Effective People',
        pageCount : 384,
        genre : 'Business literature',

};
let objs2 = {
        title: 'The 8th Habit: From Effectiveness to Greatness',
        pageCount : 432,
        genre : 'Business literature',

};
let objs3 = {
        title: 'Think and Grow Rich by Napoleon Hill',
        pageCount : 233,
        genre : 'Business literature',

};
console.log(objs1);
console.log(objs2);
console.log(objs3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let objcs1 = {
        title: 'The 7 Habits of Highly Effective People',
        pageCount : 384,
        genre : 'Business literature',
        authors: [{name: 'Stephen R. Covey'}, {age:44}]
};
let objcs2 = {
        title: 'The 8th Habit: From Effectiveness to Greatness',
        pageCount : 432,
        genre : 'Business literature',
        authors: [{name: 'Stephen R. Covey'}, {age: 3}]
};
let objcs3 = {
        title: 'Think and Grow Rich by Napoleon Hill',
        pageCount : 233,
        genre : 'Business literature',
        authors: [{name: 'Napoleon Hill, Bill Hartley, Ann Hartley...more'}, {age: 2}]
};
console.log(objcs1);
console.log(objcs2);
console.log(objcs3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
        {name: mass[0], username: mass[0], password: '1234'},
        {name: mass[1], username: mass[1], password: '123345'},
        {name: mass[2], username: mass[2], password: '432134'},
        {name: mass[3], username: mass[3], password: '12345667'},
        {name: mass[4], username: mass[4], password: '543264'},
        {name: mass[5], username: mass[5], password: '2342364236'},
        {name: mass[6], username: mass[6], password: '1234124'},
        {name: mass[7], username: mass[7], password: '12328'},
        {name: mass[8], username: mass[8], password: '6456234'},
        {name: mass[9], username: mass[9], password: '574243'},
];
console.log(user['0']['password']);
console.log(user['1']['password']);
console.log(user['2']['password']);
console.log(user['3']['password']);
console.log(user['4']['password']);
console.log(user['5']['password']);
console.log(user['6']['password']);
console.log(user['7']['password']);
console.log(user['8']['password']);
console.log(user['9']['password']);


//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
