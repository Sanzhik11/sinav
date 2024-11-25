// function calculator() {
//     while (true) {

//         let input1 = prompt("Бірінші санды енгізіңіз:");
//         let input2 = prompt("Екінші санды енгізіңіз:");

//         let num1 = parseFloat(input1);
//         let num2 = parseFloat(input2);

//         if (isNaN(num1) || isNaN(num2)) {
//             alert("Қате енгізу! Тек сандарды енгізіңіз.");
//             continue;
//         }

//         let addition = num1 + num2;
//         let subtraction = num1 - num2;
//         let multiplication = num1 * num2;
//         let division = num2 !== 0 ? (num1 / num2).toFixed(2) : "Бөлу мүмкін емес (0-ге бөлу)";

//         alert(`Нәтижелер:
//         kosu: ${addition}
//         azaitu: ${subtraction}
//         kobeitu: ${multiplication}
//         bolu: ${division}`);
//         break;
//     }
// }

// calculator();



// let price = parseFloat(prompt("Заттың бағасын енгізіңіз:"));
// let quantity = parseInt(prompt("Қанша зат сатып алғыңыз келеді?"));


// let totalCost = price * quantity;

// let discount = 0;

// if (totalCost > 20000) {
//     discount = 0.3; 
// } else if (totalCost > 10000) {
//     discount = 0.2; 
// } else if (totalCost > 5000) {
//     discount = 0.1; 
// }
// let discountAmount = totalCost * discount;
// let finalAmount = totalCost - discountAmount;


// alert(`jalpy kunu: ${totalCost.toFixed(2)} tenge
// jenildik: ${discountAmount.toFixed(2)} tenge
// : ${finalAmount.toFixed(2)} tenge`);






// let hiddenNumber = Math.floor(Math.random() * 100) + 1;

// alert("1 мен 100 аралығында жасырылған санды табыңыз!");


// while (true) {
//     let guess = parseInt(prompt("Сан жазыңыз:"));
    
//     if (isNaN(guess)) {
//         alert("Тек бүтін санды енгізіңіз!");
//         continue;
//     }
    
//     let difference = Math.abs(hiddenNumber - guess);

//     if (guess === hiddenNumber) {
//         alert("Дұрыс! Жасырылған санды таптыңыз!");
//         break;
//     } else if (difference <= 5) {
//         if (guess < hiddenNumber) {
//             alert("Сәл жоғары");
//         } else {
//             alert("Сәл төмен");
//         }
//     } else {
//         if (guess < hiddenNumber) {
//             alert("Жай жоғары");
//         } else {
//             alert("Жай төмен");
//         }
//     }
// }



/* 
let num1 = parseInt(prompt("Бірінші санды енгізіңіз (num1):"));
let num2 = parseInt(prompt("Екінші санды енгізіңіз (num2):"));


num1 = num1 + num2; 
num1 = num1 - num2; 


console.log(`Ауыстырылған мәндер: num1 = ${num1}, num2 = ${num2}`);
 */
















