"use strict";

function solveEquation(a, b, c) {
    const d = Math.pow(b, 2) - 4 * a * c; 
    let arr = []; 

    if (d === 0) {
        const root = -b / (2 * a);
        arr.push(root);
    } 
    else if (d > 0) {
        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(root1, root2);
    }

    return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthlyRate = (percent / 100) / 12;

    const principal = amount - contribution;

    if (principal <= 0) {
        return 0;
    }

    const monthlyPayment = principal * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

    const totalPayment = monthlyPayment * countMonths;

    return Math.round(totalPayment * 100) / 100;
}
