// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
//
//
const form1 = document.getElementById('my-form1');
if (form1) {
const submitButton = document.getElementById('submit-form1');
const output1 = document.getElementById('output1');
//
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Зупиняємо відправку форми на сервер

    const name1 = document.getElementById('name1').value;
    const surname1 = document.getElementById('surname1').value;
    // const age1 = document.getElementById('age1').value;
    const age1 = document.getElementById('age1').value;

    // const message = `Ім'я: ${name1}\nПрізвище: ${surname1}\nНомер телефону: ${age1}`;
    //output1.innerHTML = `<p>${message}</p>`;
    output1.innerHTML = `<p><u>Ім'я:</u> ${name1}</p>\n<p><u>Прізвище:</u> ${surname1}</p>\n<p><u>Номер телефону:</u> ${age1}</p>`;
    // output1.innerText = 'asdASDA';
    // console.log('asdfasd');
    output1.style.border = '2px solid black';
    output1.style.padding = '2%';
});
}
//
// ==========================




// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const refreshButton = document.getElementById('refresh-button2');
if (refreshButton) {
    const bold2 = document.getElementById('bold2');
    if (localStorage.getItem('number')) {
        let key = localStorage.getItem('number');
        ++key;
        bold2.innerText = key;
        localStorage.setItem('number', `${key}`);
    } else {
        bold2.innerText = '1';
        localStorage.setItem('number', '1');
    }
refreshButton.addEventListener('click', function() {
    location.reload();
});
}
//
//
//
// ==========================






// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
// МОЯ СТОРІНКА index.html для мого завдання буде мати назву task3.html, для іншої sessions.html
//
//
const script3 = document.getElementById('script3');
if(script3) {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    const date = new Date();
    const options = { timeZone: 'Europe/Kiev' };
    const localTime = date.toLocaleString('en-US', options);
//
    const session = {
        date: localTime,
    };
//
    sessions.push(session);
//
    localStorage.setItem('sessions', JSON.stringify(sessions));
}
//
//
//
//
const session3 = document.getElementById('session3');
if (session3) {
    let sessionsData = JSON.parse(localStorage.getItem('sessions'));
    //
    let mainBlock3 = document.createElement('div');
    mainBlock3.className = 'mainBlock3';
    //
    let pData = document.createElement('h2');
    pData.innerText = `${Object.keys(sessionsData[0])}:`;
    pData.className = 'p3';
    mainBlock3.appendChild(pData);
    //
    for (let i = 0; i < sessionsData.length; ++i) {
    let p3 = document.createElement('p');
        p3.className = 'p3';
    //
    p3.textContent = sessionsData[i].date;
        console.log(p3);
        mainBlock3.appendChild(p3);
    }
    //
    document.body.appendChild(mainBlock3);
}
//
// =========================







//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів.
// При натисканні prev виводяться попередні 10 об'єктів.
//
//
let div4 = document.getElementById('div4');
//
if (div4) {
    class Client {
        constructor(id, name, surname, email, phone) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
        }
    }
    //
let user = function (c) {
//створив дані щоб не писати вручну.
const names = ["John", "Jane", "Bob", "Mary", "Tom", "Kate"];
const surnames = ["Smith", "Doe", "Johnson", "Lee", "Brown", "Davis"];
const emails = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];
//масив для заповнення через класс.
let client = [];
//цикл для авто заповнення 10 елементів.
for (let i = 0; i < c; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${emails[Math.floor(Math.random() * emails.length)]}`;
    const phone = `+380-${Math.floor(Math.random() * 100000000 + 900000000)}`;
    client[i] = new Client (Math.floor(Math.random() * 9000000 + 1000000), name, surname, email, phone);
}
    return client;
}
//
    let users = user(100);
//Вивів в консоль весь згенерований масив щоб перевірити чи дані виводяться коректно.
    console.log(users);
    //

//
}
//
// =======================================





// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)







