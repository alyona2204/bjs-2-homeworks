function getArrayParams(...arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }

    for (let num of arr) {
        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }

        sum += num;
    }

    const avg = (sum / arr.length).toFixed(2);

    return {
        min: min,
        max: max,
        avg: Number(avg) 
    };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0; 
    return arr.reduce((sum, current) => sum + current, 0); 
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0; 
    const max = Math.max(...arr); 
    const min = Math.min(...arr); 
    return max - min; 
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0; 
    let sumEven = 0; 
    let sumOdd = 0; 

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num; 
        } else {
            sumOdd += num; 
        }
    }
    return sumEven - sumOdd; 
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0; 
    let sumEven = 0; 
    let countEven = 0; 

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num; 
            countEven++; 
        }
    }

    return countEven === 0 ? 0 : sumEven / countEven; 
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity; 

    for (let arr of arrOfArr) {
        const result = func(...arr); 
        
        if (result > maxWorkerResult) {
            maxWorkerResult = result; 
        }
    }

    return maxWorkerResult; 
}

const arr = [
    [10, 10, 11, 20, 10], 
    [67, 10, 2, 39, 88], 
    [72, 75, 51, 87, 43], 
    [30, 41, 55, 96, 62]
];
