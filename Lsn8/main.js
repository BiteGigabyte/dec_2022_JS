// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
console.log('TASK_1:');
function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
//
let users = [];
for(let i = 9; i >= 0; --i) {

users[i] = new User(109 - i, `Alex${i}`, `AlexS${i}`, `a${i}sdf${i}sadf@asdf${i}`, 12233444333+i);

}
//
console.log(users);
console.log('');



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log('TASK_2:');
//
let users1 = users.filter((element) => (element['id'] % 2) === 0);
console.log(users1);
//
console.log('');



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//Спробував скопіювати задачу тому що не було розуміння як переробляти 7 дз
console.log('TASK_3:');
let usersC = JSON.stringify(users1);
usersC = JSON.parse(usersC);
//Відсортовування
usersC.sort((a, b) => a['id'] - b['id']);
console.log(usersC);
//
console.log('');



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
console.log('TASK_4:');
//
class Client {
    constructor (id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
}
}
//створив дані щоб не писати вручну.
    const names = ["John", "Jane", "Bob", "Mary", "Tom", "Kate"];
    const surnames = ["Smith", "Doe", "Johnson", "Lee", "Brown", "Davis"];
    const emails = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];
    const orders = [["book"], ["phone"], ["laptop"], ["shoes"], ["shirt"], ["hat"], ["book", "phone"], ["phone", "laptop"], ["laptop", "shoes"],
    ["shoes", "shirt"], ["shirt", "hat"], ["book", "phone", "laptop"], ["phone", "laptop", "shoes"], ["laptop", "shoes", "shirt"],
    ["shoes", "shirt", "hat"]];
//масив для заповнення через класс.
    let client = [];
//цикл для авто заповнення 10 елементів.
for (let i = 0; i <= 9; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${emails[Math.floor(Math.random() * emails.length)]}`;
    const phone = `+380-${Math.floor(Math.random() * 100000000 + 900000000)}`;
    const order = orders[Math.floor(Math.random() * orders.length)];
    client[i] = new Client (
        Math.floor(Math.random() * 9000000 + 1000000), name, surname, email, phone, order);
}
//
// console.log(client);
//
//
//
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//відсортовую
console.log(client.sort((a, b) => a.order.length - b.order.length));
//
console.log('');



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
console.log('TASK_5:');
//
function Car (model, manufacturer, year, speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {console.log(`їдемо зі швидкістю ${this.speed} на годину`)};
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    this.changeYear = function (newValue) {this.year = newValue;};
    this.addDriver = function (driver) {this.driver = driver;};
}
//
//
//Перевірка роботи функції:
// Створення екземпляру об'єкту класу car
const myCar = new Car("Accord", "Honda", 2022, 180, "V6");
//
//вивів об'єкт
console.log(myCar);
// Виклик методу drive
myCar.drive();
// Виклик методу info
myCar.info();
// Виклик методу increaseMaxSpeed
myCar.increaseMaxSpeed(200);
// Виклик методу changeYear
myCar.changeYear(2023);
// Виклик методу addDriver
myCar.addDriver("John Doe");
//
//вивів 2й раз об'єкт вже змінений
console.log(myCar);
// console.log(myCar?.driver);
//
//
console.log('');



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
console.log('TASK_6:');
//
// function Car (model, manufacturer, year, speed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function () {console.log(`їдемо зі швидкістю ${this.speed} на годину`)};
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] !== "function") {
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = newSpeed;
//     };
//     this.changeYear = function (newValue) {this.year = newValue;};
//     this.addDriver = function (driver) {this.driver = driver;};
// }



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку