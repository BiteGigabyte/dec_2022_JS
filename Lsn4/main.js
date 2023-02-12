//
//
//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
document.write(`<h2>Task_1<h2>`);
//
let a = 4, b = 4;

function rectangle(a, b) {
    return (a * b);
}
//
document.write(`<div>a = ${a}, b = ${b}</div>`);
document.write(`<div>result is: ${rectangle(a, b)}</div>`);
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
document.write(`<h2>Task_2<h2>`);
//
let r = 5;

function circle(r) {
    let pi = 3.141592;
    return (pi * (r * r));
}
//
document.write(`<div>radius is: ${r}</div>`);
document.write(`<div>result is: ${circle(r)}</div>`);
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//S = 2 π R h + 2 π R 2
document.write(`<h2>Task_3<h2>`);
//
let h = 10, r1 = 30;

function cylinder(r1, h) {
    let pi = 3.141592;
    return ((2 * pi * r1 * h) + (2 * pi * (r1 * r1)));
}
//
document.write(`<div>radius is: ${r1}, height is: ${h}</div>`);
document.write(`<div>result is: ${cylinder(r1, h)}</div>`);
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка приймає масив та виводить кожен його елемент
document.write(`<h2>Task_4<h2>`);
//
let arrayOne = [2, 1, 4, 3, 6, 5, 8, 7];

function cout(arrayOne) {
    for (const arrayOneElement of arrayOne) {
        document.write(`${arrayOneElement} `);
    }
}
//
cout(arrayOne);
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`<h2>Task_5<h2>`);

//
function paragraph(arguments) {
    return `<p>${arguments}</p>`;
}
//
document.write(paragraph(`Lorem ipsum dolor sit amet.`));
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<h2>Task_6<h2>`);
//
function threeLi(arguments) {
    document.write(`<ul>`);
    for (let f = 0; f < 3; ++f) {
        document.write(`<li>${arguments}</li>`)
    }
    document.write(`</ul>`);

// threeLi(`Lorem ipsum dolor sit amet, consectetur.`);
}
//
threeLi('Lorem ipsum dolor sit amet, consectetur.');
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<h2>Task_7<h2>`);
//
function threeLiTwo(arguments, count) {
    document.write(`<ul>`);
    for (let f = 0; f < count; ++f) {
        document.write(`<li>${arguments}</li>`)
    }
    document.write(`</ul>`);

// threeLi(`Lorem ipsum dolor sit amet, consectetur.`);
}
//
threeLiTwo('Lorem ipsum dolor sit amet, consectetur.', 2);
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write(`<h2>Task_8<h2>`);
//
let arrayA = ['wow', 2, 4, 'Hello', true, [3.2, 2, 3], {step: 1, steptwo: 2}];
//
function elements(array) {
document.write(`<ol>`);
    for (let f = 0; f < array.length;++f)
    {
        document.write(`<li>${array[f]}</li>`);
    }
document.write(`</ol>`);
}
elements(arrayA);
document.write(`<h3>-------------------</h3>`);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.






// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

