    "use strict";

    // №1

    // Код должен находить сумму чисел:

    // let num1 = 1;
    // let num2 = 2;
    // console.log('сумма: ' + num1 + num2); 

    let num1 = 1;
    let num2 = 2;
    let num3 = num1 + num2;
    console.log('сумма: ' + num3); 

    // №2

    // Код должен находить сумму чисел:

    // let a = 1;
    // let b = 2;
    // console.log(a + b + c);


    let a = 1;
    let b = 2;
    console.log(a + b);

    // №3

    // Код должен находить сумму цифр числа:

    // let num = '123';
    // let sum = num[0] + num[1] + num[2];
    // console.log(sum);

    let num = '123';
    let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
    console.log(sum);

    // №4

    // Код должен вывести первую цифру числа:

    // let num4 = 123;
    // console.log(num4[0]);


    let num4 = 123;
    let strNum = String(num4);
    console.log(Number(strNum[0])); // Number
    console.log(strNum[0]);  //String

    // №5

    // Код должен был вывести в консоль число 1, но выводит 0:

    // let a1 = 0;
    // console.log(a1++);

    let a1 = 0;
    // console.log(a1++);
    // console.log(a1);
    console.log(++a1);

    // №6

    // Код должен вывести количество цифр в числе:

    // let num5 = 123;
    // console.log(num5.length);

    let num5 = 123;
    console.log(String(num5).length);

    // №7

    // Код должен найти количество секунд в сутках:

    // let a2 = 24 / 60 / 60;
    // console.log(a2);

    let a2 = 24 / 60 / 60;
    console.log(a2);

    // №8

    // Код должен вывести количество цифр в числе:

    // let num6 = 123;
    // let str = String(num6);
    // console.log(num6.length);

    let num6 = 123;
    let str = String(num6);
    console.log(str.length);

    // №9

    // Код должен вывести последнюю цифру числа:

    // let num7 = 129;
    // let str1 = String(num7);
    // console.log(num7[num7.length]);

    let num7 = 129;
    let str1 = String(num7);
    console.log(str1[str1.length - 1]);

    // №1

    // Код должен вывести количество цифр в числе:

    // let num8 = 123;
    // let str2 = String(num8);
    // console.log(str2.lenght);

    let num8 = 123;
    let str2 = String(num8);
    console.log(str2.length);

    // №11

    // Код должен вывести последнюю цифру числа:

    // let num9 = 123;
    // let str3 = String(num9);
    // console.log(str3[str3.length]);

    let num9 = 123;
    let str3 = String(num9);
    console.log(str3[str3.length - 1]);

    // №12

    // Код должен найти сумму чисел:

    // let a3 = '123';
    // let b3 = '456';
    // let s3 = Number(a3) + String(b3);

    // console.log(s3);

    let a3 = '123';
    let b3 = '456';
    let s3 = Number(a3) + Number(b3);

    console.log(s3);

    // №13

    // Код должен найти сумму чисел:

    // let aaa = 1;
    // let bbb = 2;
    // let ccc = 3;

    // console.log(aaa + bbb + ссс);

    let aaa = 1;
    let bbb = 2;
    let ccc = 3;

    console.log(aaa + bbb + ccc);