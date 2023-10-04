"use strict"
function solveEquation(a, b, c) {
  let discriminant =  b**2-4*a*c;
  
  let arr = [];

  if(discriminant === 0) {
    arr.push(-b/(2*a));
  }
  else if(discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant))/(2 * a));
    arr.push((-b - Math.sqrt(discriminant))/(2 * a));
  }
  
  return arr;
}

solveEquation(1, 5, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rateMonth = percent / 100 / 12; /* процентная ставка в месяц*/

  let loanBody = amount - contribution; /*Тело кредита*/

  let monthlyPayment = loanBody * (rateMonth + (rateMonth / (((1 + rateMonth) ** countMonths) - 1)));/*Ежемесячная оплата*/

  let totalAmount = +(monthlyPayment * countMonths).toFixed(2); /*Общаяя сумма кредита*/

  return totalAmount;
}

calculateTotalMortgage(10, 0, 50000, 12);