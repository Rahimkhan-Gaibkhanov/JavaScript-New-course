    "use strict";

    // Задача 1

    // Объявите пустой массив, а затем заполните его числами от 1 до 10.

    let arr = [];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    arr[4] = 5;
    arr[5] = 6;
    arr[6] = 7;
    arr[7] = 8;
    arr[8] = 9;
    arr[9] = 10;

    console.log(arr);

    // Задача 2

    // Объявите пустой массив, а затем заполните его 5-ю буквами x.

    let arr1 = [];
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';
    arr1[3] = 'd';
    arr1[4] = 'e';

    console.log(arr1);

    // Задача 3js.Pm.Lp.ALF

    // С помощью цикла заполните массив числами от 1 до 100.

    let arr2 = [];

    for (let i = 0; i <= 99; i++) {
        arr2[i] = i + 1;
    }
    console.log(arr2);

    // Задача 4

    // С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

    let arr3 = [];

    for (let j = 1, k = 0; j <= 99; j += 2, k++) {
        arr3[k] = j;
    }
    console.log(arr3);