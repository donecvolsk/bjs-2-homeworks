/*ЗАДАНИЕ №1*/
function getArrayParams(...arr) {
  let min = Math.min(...arr); /*Минимальное число в аргументах*/
  let max = Math.max(...arr);/*Максимальное число в аргументах*/
  let sum = 0;               /*Сумма значений в аргументах*/
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];/*сложение аргументов*/  
  }
  
  let avg = +(sum / arr.length).toFixed(2); /*средне арифметическое число*/
 
  return { min: min, max: max, avg: avg };
  }


getArrayParams(1, 2, 3, -100, 10);



/*ЗАДАНИЕ №2*/

/*Насадка суммирования элементов*/
function summElementsWorker(...arr) {
  let sum = 0;
  for( let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker(0, 0, 0, -1, -100));

/*Насадка вычисления разницы максимального и минимального элементов*/
function differenceMaxMinWorker(...arr) {
  let differenceMaxMin = 0;
  differenceMaxMin = Math.max(...arr) - Math.min(...arr);

  /*Проверяем на значение "бесконечность" при отстутсвии параметров*/
  if(differenceMaxMin === -Infinity) {
    differenceMaxMin = 0;
  }

  return differenceMaxMin;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

/*Насадка вычисления разницы сумм чётных и нечётных элементов*/
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; /* Сумма четных элементов параметра*/
  let sumOddElement = 0; /* Сумма нечетных элементов параметра*/
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    }
    else {
    sumOddElement += arr[i];
    } 
  }
  
  let differenceEventOdd = sumEvenElement - sumOddElement; /* Разгтца четных и нечетных элементов параметра*/
  
  return differenceEventOdd;
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));

/* Насадка вычисления среднего значения чётных элементов*/
function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0; /* Сумма четных элементов параметра*/
  countEvenElement = 0; /*Количество элементов параметра*/

  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  
  let avgElement = sumEvenElement / countEvenElement; /*Среднее значение четных элементов параметра*/
  /*Проверка если элементы отчсутствуют */
  if (arr.length === 0 ) {
    avgElement = 0;
  }
  
  return avgElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));


/*Задание №3*/
const arr = [
  [10, 10, 11, 20, 10], 
  [67, 10, 2, 39, 88], 
  [72, 75, 51, 87, 43], 
  [30, 41, 55, 96, 62]
];

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for(i = 0; i < arrOfArr.length; i++) {
    let resultFunc = func(...arrOfArr[i]);
    
    if(resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  } 
  return maxWorkerResult;
}

//console.log(makeWork(arr, summElementsWorker));
//console.log(makeWork(arr, differenceMaxMinWorker));
//console.log(makeWork(arr, differenceEvenOddWorker));
//console.log(makeWork(arr, averageEvenElementsWorker));
