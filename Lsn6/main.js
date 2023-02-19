// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
console.log('TASK 1:');
let arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
for (let i = 0; i < arr1.length; ++i) {
    console.log(`the ${i+1} word is - ${arr1[i].length} length;`);
}
console.log('');



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
console.log('TASK 2:');
// беру в задачу масив такий же з минулої
for (let i = 0; i < arr1.length; ++i) {
    arr1[i] = arr1[i].toUpperCase();
    // console.log(arr1[i]);
}
console.log(arr1);
console.log('');



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
console.log('TASK 3:');
// беру в задачу масив такий же з минулої
for (let i = 0; i < arr1.length; ++i) {
    arr1[i] = arr1[i].toLowerCase();
    // console.log(arr1[i]);
}
console.log(arr1);
console.log('');



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
console.log('TASK 4:');
let str = ' dirty string   ';

str = str.replaceAll(' ', '');
console.log(str);
str = str.replaceAll('ys', 'y s');
console.log(str);
console.log('');



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
console.log('TASK 5:');
//Використав змінну str з минулої задачі
str = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    return str.split(' ');
}
 let arr = stringToarray(str);
//
console.log(arr);
// console.log(Array.isArray(arr));
console.log('');



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.
//
console.log('TASK 6:');
//Використав змінну str з минулої задачі
str = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
for (let i = 0; i < str.length; ++i) {
    str[i] = `${str[i]}`;
}
console.log(str);
console.log('');



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
console.log('TASK 7:');
let nums = [11,21,3];
function sortNums (nums, direction) {
    if (direction === 'ascending') {
       return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a)
    }
}
console.log(sortNums(nums, 'descending'));
console.log('');



// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
console.log('TASK 8:');
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
//відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b['monthDuration'] - a['monthDuration']);
console.log(coursesAndDurationArray);
//відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(moreFive => moreFive.monthDuration > 5);
console.log(coursesAndDurationArray);
//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray = coursesAndDurationArray.map((courses, index) => ({id: index + 1, title: courses['title'], monthDuration: courses['monthDuration']}));
console.log(coursesAndDurationArray);
//
console.log('');



// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
console.log('TASK 9:');
//
console.log('Описана колода:');
let cards = [];
// function crds = (cards, ) {
    for (let i = 0; i < 4; ++i) {
        let masti = ['spade', 'diamond','heart', 'clubs'];
        let numbers = [6, 7, 8, 9, 10,'jack','queen','king', 'ace'];
        let color = (i1) => {if (i1 === 0 || i1 === 3) {return 'black';} else if (i1 === 1 || i1 === 2) {return 'red';}};
        for (let j = 0; j < 9; ++j) {
                if (i === 0) {
                    cards[j] = {cardSuit: masti[i], value: numbers[j], color: color(i)}
                } else if (i === 1) {
                    cards[j + 9] = {cardSuit: masti[i], value: numbers[j], color: color(i)}
                } else if (i === 2) {
                    cards[j + 18] = {cardSuit: masti[i], value: numbers[j], color: color(i)}
                } else if (i === 3) {
                    cards[j + 27] = {cardSuit: masti[i], value: numbers[j], color: color(i)}
                }
        }
    }
//}
console.log(cards);
//
console.log('Виконані завдання: ');
//+ знайти піковий туз
console.log(cards.filter((card) => card['value'] === 'ace' && card['cardSuit'] === 'spade'));
//+ знайти всі шістки
console.log(cards.filter((card) => card['value'] === 6));
//+ знайти всі червоні карти
console.log(cards.filter((card) => card['color'] === 'red'));
//+ знайти всі буби
console.log(cards.filter((card) => card['cardSuit'] === 'diamond'));
//+ знайти всі трефи від 9 та більше
console.log(cards.filter((card) => card['cardSuit'] === 'clubs' && card['value'] !== 6 && card['value'] !== 7 && card['value'] !== 8));
//
console.log('');



// =========================
//
//
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
console.log('TASK 10:');
//
//взяв описану колоду карт cards
console.log(cards);
//
cards = cards.reduce((accumulator, value) => {
    if (value['cardSuit'] === 'spade') {
        accumulator['spades'].push(value);
    } else if (value['cardSuit'] === 'diamond') {
        accumulator['diamonds'].push(value);
    } else if (value['cardSuit'] === 'heart') {
        accumulator['hearts'].push(value);
    } else if (value['cardSuit'] === 'clubs') {
        accumulator['clubs'].push(value);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
//
console.log(cards);
//
console.log('');



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
//
console.log('TASK 11:');
//
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
