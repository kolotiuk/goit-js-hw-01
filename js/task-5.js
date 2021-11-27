// Task 5
let user = prompt("Какая ваша страна?");
user = user.toLowerCase();
const china = "100";
const chili = "250";
const australia = "170";
const india = "80";
const jamaika = "120";

if (user === "китай") {
    alert(`Доставка в ${user} будет стоить ${china} кредитов`);
} else if (user === "чили") {
    alert(`Доставка в ${user} будет стоить ${chili} кредитов`);
} else if (user === "австралия") {
    alert(`Доставка в ${user} будет стоить ${australia} кредитов`);
} else if (user === "индия") {
    alert(`Доставка в ${user} будет стоить ${india} кредитов`);
} else if (user === "ямайка") {
    alert(`Доставка в ${user} будет стоить ${jamaika} кредитов`);
} else {
    alert("В вашей стране доставка не доступна");
}