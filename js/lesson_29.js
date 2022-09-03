    'use strict';

    // №1

    // Дана строка '12345'. Найдите сумму цифр этой строки.

    let numStr = '12345';

    console.log(Number(numStr[0]) + Number(numStr[1]) + Number(numStr[2]) + Number(numStr[3]) + Number(numStr[4]));

    // №2

    // Дано число 12345. Найдите сумму цифр этого числа.

    let num = 12345;
    let strNum = String(num);

    console.log(Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]) + Number(strNum[3]) +Number(strNum[4]));

    // №3

    // Дано число 12345. Найдите произведение цифр этого числа.

    let num1 = 12345;
    let num2 = String(num1);
    console.log(num2[0] * num2[1] * num2[2] * num2[3] * num2[4]);

    // №4

    // Дано число 12345. Переставьте цифры этого числа в обратном порядке.

    let num3 = 12345;
    let num4 = String(num3);

    console.log(num4[4] + num4[3] + num4[2] + num4[1] + num4[0]);