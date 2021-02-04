//Задание 1
document.write("Задание 1</br>");
let mass1 = [1, 2, 3, 4, 5];

for (let num1 of mass1) {
    document.write(`${num1}  `);
}

//Задание 2
document.write("</br></br>Задание 2</br>");
let mass2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let num2 of mass2) {
    if (num2 > -10 && num2 < -3) document.write(`${num2}  `);
}

//Задание 3
document.write("</br></br>Задание 3</br>");
let mass3 = [],
    mass3_ = [],
    startNum = 23,
    i = 0,
    k = 0,
    result = 0;

while (startNum <= 57) {
    mass3[i] = startNum;
    i++;
    startNum++;
}

document.write("Через While</br>");
document.write(mass3);


for (let l = 23; l <= 57; l++) {
    mass3_[k] = l;
    k++;
}

document.write("</br>Через for</br>");
document.write(mass3_);

for (let num3 of mass3) {
    result += num3;
}

document.write("</br>Сумма элементов массива</br>");
document.write(result);


//Задание 4
document.write("</br></br>Задание 4</br>");

let mass4 = ['10', '20', '30', '50', '235', '3000'],
    cifr4 = 2;                                         // указываем число, с которого должны начинаться выводимые числа

document.write(`Элементы массива начинающиеся с цифры ${cifr4}:</br>`);

for (let num4 of mass4) {
    if (num4[0] == cifr4) {
        document.write(`${num4}  `);
    }
}


//Задание 5
document.write("</br></br>Задание 5</br>");

let mass5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let num5 of mass5) {
    if (num5 == 'СБ' || num5 == 'ВС') {
        document.write(`<b>${num5}</b>  `);
    } else {
        document.write(`${num5}  `);
    }
}

//Задание 6
document.write("</br></br>Задание 6</br>");