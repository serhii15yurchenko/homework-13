// МІНІМУМ
// 2) Правильні назви змінних
// let username = 'Serhii';
// let userName = 'Serhii';
// let user_name = 'Serhii';
// let $username = 'Serhii';

// 3) Неправильні назви змінних 

// let user.name = 'Serhii';
// let 1username = 'Serhii';
// let user-name = 'Serhii';
// let let = 'Serhii'; /* зарезервовані слова */
// let return = 'Serhii'; /* зарезервовані слова */
// let class = 'Serhii'; /* зарезервовані слова */

// 4) Всі можливі способи коментування коду

/* */
// 

// 5) Стилі написання імен змінних
// snake_case
// сamelCase

// НОРМА 

// 1.Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

// let nameUser = prompt('Яке Ваше ім’я?')
// alert (`Привіт, ${nameUser}!`);

// 2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

// let birthDate = +prompt('В якому році ви народилися?', 0)
// let presentYear = 2022 - birthDate;
// alert (`Ваш вік: ${presentYear}`);

// 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

// let lenght = +prompt('Яка довжина квадрату?', 0);
// let perimeter = lenght * 4;
// alert (`Периметр квадрату: ${perimeter}`)

// МАКСИМУМ
// 1.Запитай у користувача радіус кола і виведи площу такої окружності.
// let radius = +prompt ('Який радіус кола?', 0);
// let area = Math.PI * Math.pow (radius, 2);
// alert (`Площа кола: ${area} квадратних сантиметрів`);

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

// let distance = +prompt ('Яка відстань в кілометрах між двома містами?', 0);
// alert (`Відстань: ${distance}`);
// let time = +prompt ('За скільки годин Ви хочете дістатися до пункту призначення?', 0);
// alert (`Час: ${time}`);
// let speed = distance / time;
// alert (`Швидкість, з якою необхідно рухатися: ${speed} км/год.`);

// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

// let dollar = +prompt ('Скільки в тебе долларів?', 0);
// alert(`Ти маєш: ${dollar} долларів`);
// const EUROEXCHANGERATE = 0.98;
// let euro = dollar * EUROEXCHANGERATE;
// alert (`У Вас ${euro} євро`);
