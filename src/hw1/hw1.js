const getMultiOrSum = (a, b) => a % 2 === 0 ? a * b : a + b;

const getQuarterByCoordinate = (x, y) => {
    let quarter;

    if (x > 0 && y > 0) {
        quarter = '1';
    } else if ((x > 0) && (y < 0)) {
        quarter = '2';
    } else if ((x < 0) && (y > 0)) {
        quarter = '3';
    } else {
        quarter = '4';
    }

    return quarter;
};

const getPositiveNumber = (a, b, c) => {
    let result = 0;
    if (a >= 0)
        result += a
    if (b >= 0)
        result += b
    if (c >= 0)
        result += c
    return result;
}

const getMax = (a, b, c) => {
    let result;
    let m = ((a + b + c) > (a * b * c)) ? result = (a * b * c) : result = (a + b + c) + 3;
    return result;
}

const getRatingStud = rating => {
    let mes = ((rating >= 0) && (rating <= 19)) ? result = 'F' : ((rating >= 20) && (rating <= 39)) ? result = 'E' : ((rating >= 40) && (rating <= 59)) ? result = 'D' : ((rating >= 60) && (rating <= 74)) ? result = 'C' : ((rating >= 75) && (rating <= 89)) ? result = 'B' : ((rating >= 90) && (rating <= 100)) ? result = 'A' : result = 'ERROR'
    return result;
}

const chekSimpleNumOrNot = a => {
    let prostoe = true;
    for (let i = 2; i < a; i++) {
        if (a % i === 0)
            prostoe = false
    }
    result = (prostoe ? 'простое' : 'составное');
    return result;
}

const getRadicalFromNaturalNum = p => {
    let result = 0;
    for (let i = 1; i < p; i++) {
        if ((p / i) === i)
            result = i;
    }
    return result;
}

const getFactorialfromNum = n => {
    for (let i = n; --i;) {
        n *= i;
    }
    return n;
}

const getSummNumber = n => {
    result = null;
    remain = null;
    while (n) {
        remain = n % 10;
        n = (n - remain) / 10;
        result += remain;

    }
    return result;
}

const getMirrorNumber = s => {
    let x = 0;
    while (s > 0) {
        x = x * 10 + s % 10;
        s = parseInt(s / 10);

    }
    return x;
}

const Day = number => {
    let str = '';
    switch (number) {
        case 1:
            str = 'Понедельник';
            break;
        case 2:
            str = 'Вторник';
            break;
        case 3:
            str = 'Среда';
            break;
        case 4:
            str = 'Четверг';
            break;
        case 5:
            str = 'Пятница';
            break;
        case 6:
            str = 'Суббота';
            break;
        case 7:
            str = 'Воскресенье';
            break;
        default:
            str = 'Неверный номер';
    }
    return str;
}

const distanceBetweenPoint = (x1, x2, y1, y2) => {
    let result;
    result = (((x2 - x1)**2 + (y2 - y1)**2) ** 0.5);
    return result;
}  

const getMinNumFromArray = array => {
    if (array.length == 0) {
        return -1;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

const getMaxNumFromArray = array => {
    if (array.length == 0) {
        return -1;
    }
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

const getMaxNumberIndex = array => {
    if (array.length == 0) {
        return -1;
    }
    max = null;
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

const getMinNumberIndex = array => {
    if (array.length == 0) {
        return -1;
    }
    min = null;
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}

const getSumOfArray = array => {
    if (array.length == 0) {
        return -1;
    }
    let sumIndex = 0;
    for (let i = 1; i < array.length; i += 2)
        sumIndex += array[i];
    return sumIndex;
}

const getQuantityOddElementsFromArray = array => {
    if (array.length == 0) {
        return -1;
    }
    let k = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            k++
        }
    }
    return k;
}

const MakeReversOfArray = (array) => {
    if (array.length == 0) {
        return -1;
    }
    let b = [];
    let j = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        b[j] = array[i];
        j++;
    }
    return b;
}

const swapElementsInArray = array => {
    if (array.length == 0) {
        return -1;
    }
    let result;
    result = (array.slice(array.length / 2, array.length).concat(array.slice(0, array.length / 2)));
    return result;
}

const bubbleSort = array => {
    if (array.length == 0) {
        return -1;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] > array[j]) {
                const t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}

const selectSort = array => {
    if (array.length == 0) {
        return -1;
    }
    for (let i = 0; i < array.length; i++) {
        let b = array[i]; j = i - 1;
        while ((j >= 0) && (array[j] < b)) {
            array[j + 1] = array[j]; j--;
        }
        array[j + 1] = b;
    }
    return array;
}

const insertSort = array => {
    if (array.length == 0) {
        return -1;
    }
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[min]) {
                min = j;
            }
        }
        const t = array[min];
        array[min] = array[i];
        array[i] = t;
    }
    return array;
}