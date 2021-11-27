// Task 3
const user = prompt("Какой пароль?");
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
if (user === null) {
    message = "Отменено пользователем!";
} else if (user === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
} else {
    message = "Доступ запрещен, неверный пароль!";
}

alert(message);