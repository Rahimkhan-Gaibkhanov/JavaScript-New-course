    'use strict';

    // №1

    // Дана переменная со значением '5px' и переменная со значением '6px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.

    let num1 = parseInt('5px');
    let num2 = parseInt('6px');

    console.log(num1 + num2);

    // №2

    // Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.


    let num3 = parseFloat('5.5px');
    let num4 = parseFloat('6.25px');

    console.log(num3 + num4);

    // №3

    // Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'.

    console.log(`${num3 + num4}px`);