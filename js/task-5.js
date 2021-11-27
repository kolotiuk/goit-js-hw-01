// Task 5
let user = prompt("Какая ваша страна?");
user = user.toLowerCase();
const china = "100";
const chili = "250";
const australia = "170";
const india = "80";
const jamaika = "120";

switch (user) {
    case "китай":
        alert(`Доставка в ${user} будет стоить ${china} кредитов`);
        break;
    case "чили":
        alert(`Доставка в ${user} будет стоить ${chili} кредитов`);
        break;
    case "австралия":
        alert(`Доставка в ${user} будет стоить ${australia} кредитов`);
        break;
    case "индия":
        alert(`Доставка в ${user} будет стоить ${india} кредитов`);
        break;
    case "ямайка":
        alert(`Доставка в ${user} будет стоить ${jamaika} кредитов`);
        break;
    default:
        alert("В вашей стране доставка не доступна");
}