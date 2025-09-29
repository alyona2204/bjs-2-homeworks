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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
