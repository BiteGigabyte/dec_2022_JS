
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let hello = 'hello', owu = "owu", com = `com`, ua = "UA", number1 = 1, number2= 10, number3 = -999, number4 = 123;
const pI = 3.14;
let number6 = 2.7, number7 = 16, booleanT = true, booleanF = false;
console.log("");

console.log('Task_One:');
console.log(hello, owu, com, ua, number1, number2, number3, number4, pI, number6, number7, booleanT, booleanF);
console.log('');

console.log('Task_Two:');
let firstName = 'Yurii', middleName = 'Ruslanovich', lastName = 'Perun';
console.log(firstName + ' ' + middleName + ' ' + lastName);
console.log('');

console.log('Task_Three:');
let a = 100; let b = '100'; let c = true;
console.log(typeof a, typeof b, typeof c);
console.log('');

console.log('Additional_Task:');
let name = String(prompt("Введіть ім'я:", 'Юрій'));
console.log(name);
let surname = String(prompt('Введіть по батькові:', 'Русланович'));
console.log(surname);
let dateOf = String(prompt('Введіть дату народження:', 'число.місяць.рік народження'));
console.log(dateOf);