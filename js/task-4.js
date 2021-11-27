// Task 4
let credits = 23580;
let pricePerDroid = 3000;
const user = prompt("Какое количество дроидов вы хотите купить?");

if (user === null) {
    console.log("Отменено пользователем!");
} else {
    let totalPrice = user * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        alert(`Вы купили ${user} дроидов, на счету осталось ${credits} кредитов.`);
    }
}