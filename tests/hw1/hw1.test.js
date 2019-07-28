describe('HomeWork2 tasks', function () {
    
describe('getMultiOrSum',() => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6
            },
            {
                a: 1,
                b: 4,
                expected: 5
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            //When
            const {a, b, expected} = data;

            const actual = getMultiOrSum(a, b);

            //Then
            it(`Должен вернуть '${expected}' когда a = ${a} и b = ${b}`, () => {
                assert.strictEqual(actual ,expected);
       });
   });
   });


describe('getQuarterByCoordinate', () => {
    const testData = [
        {
            x: 5,
            y: 7,
            expected: '1'
        },
        {
            x: 8,
            y: 9,
            expected: '1'
        },
        {
            x: 10,
            y: 21,
            expected: '1'
        },
        {
            x: 3,
            y: -7,
            expected: '2'
        },
        {
            x: 10,
            y: -5,
            expected: '2'
        },
        {
            x: -8,
            y: 12,
            expected: '3'
        },
        {
            x: -500,
            y: 100,
            expected: '3'
        },
        {
            x: -4,
            y: 4,
            expected: '3'
        },
        {
            x: -5,
            y: -6,
            expected: '4'
        },
        {
            x: -7,
            y: -8,
            expected: '4'
        },
        {
            x: -9,
            y: -11,
            expected: '4'
        },
    ];
    testData.forEach(data => {
        const {x, y, expected} = data;
        const actual = getQuarterByCoordinate(x, y);
        it(`Должно вернуть '${expected}' когда x = ${x} и y = ${y}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});


describe('getPositiveNumber', () => {
    const testData = [
        {
            a: 6,
            b: 7,
            c: 7,
            expected: 20
        },
        {
            a: 10,
            b: 20,
            c: 30,
            expected: 60
        },
        {
            a: -5,
            b: 10,
            c: 12,
            expected: 22
        },
        {
            a: 7,
            b: -10,
            c: 20,
            expected: 27
        },
        {
            a: 9,
            b: 12,
            c: -5,
            expected: 21
        },
        {
            a: -22,
            b: -27,
            c: -13,
            expected: 0
        },
    ];
    testData.forEach(data => {
        const {a, b, c, expected} = data;
        const actual = getPositiveNumber(a, b, c);
        it(`Должно вернуть '${expected}' когда a = ${a} , b = ${b} , c = ${c} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMax', () => {
    const testData = [
        {
            a: 1,
            b: 1,
            c: 1,
            expected: 1
        },
        {
            a: 2,
            b: 2,
            c: -2,
            expected: -8
        },
        {
            a: -5,
            b: 10,
            c: 12,
            expected: -600
        },
        {
            a: 5,
            b: 5,
            c: 5,
            expected: 18
        },
        {
            a: 9,
            b: 12,
            c: 5,
            expected: 29
        },
        {
            a: -22,
            b: -27,
            c: 13,
            expected: -33
        },
    ];
    testData.forEach(data => {
        const {a, b, c, expected} = data;
        const actual = getMax(a, b, c);
        it(`Должно вернуть '${expected}' когда a = ${a} , b = ${b} , c = ${c} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getRatingStud', () => {
    const testData = [
        {
            rating: 16,
            expected: 'F'
        },
        {
            rating: 22,
            expected: 'E'
        },
        {
            rating: 45,
            expected: 'D'
        },
        {
            rating: 73,
            expected: 'C'
        },
        {
            rating: 78,
            expected: 'B'
        },
        {
            rating: 92,
            expected: 'A'
        },
        {
            rating: 101,
            expected: 'ERROR'
        },
    ];
    testData.forEach(data => {
        const {rating, expected} = data;
        const actual = getRatingStud(rating);
        it(`Должно вернуть '${expected}' когда рейтинг студента - ${rating} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('chekSimpleNumOrNot', () => {
    const testData = [
        {
            a: 16,
            expected: 'составное'
        },
        {
            a: 22,
            expected: 'составное'
        },
        {
            a: 45,
            expected: 'составное'
        },
        {
            a: 73,
            expected: 'простое'
        },
        {
            a: 9,
            expected: 'составное'
        },
        {
            a: 13,
            expected: 'простое'
        },
        {
            a: 5,
            expected: 'простое'
        },
    ];
    testData.forEach(data => {
        const {a, expected} = data;
        const actual = chekSimpleNumOrNot(a);
        it( `Число  ${a} ---- ${expected}`,  () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getRadicalFromNaturalNum', () => {
    const testData = [
        {
            p: 16,
            expected: 4
        },
        {
            p: 169,
            expected: 13
        },
        {
            p: 144,
            expected: 12
        },
        {
            p: 49,
            expected: 7
        },
        {
            p: 225,
            expected: 15
        },
        {
            p: 0,
            expected: 0
        },
    ];
    testData.forEach(data => {
        const {p, expected} = data;
        const actual = getRadicalFromNaturalNum(p);
        it( `Должно вернуть ${p} если корень этого числа  ${expected} `,  () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getFactorialfromNum', () => {
    const testData = [
        {
            n: 5,
            expected: 120
        },
        {
            n: 9,
            expected: 362880
        },
        {
            n: 2,
            expected: 2
        },
        {
            n: 3,
            expected: 6
        },
        {
            n: 4,
            expected: 24
        },
       
    ];
    testData.forEach(data => {
        const {n, expected} = data;
        const actual = getFactorialfromNum(n);
        it( `Должно вернуть факториалом ${n} является  ${expected} `,  () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getSummNumber', () => {
    const testData = [
        {
            n: 555,
            expected: 15
        },
        {
            n: 787,
            expected: 22
        },
        {
            n: 9090,
            expected: 18
        },
        {
            n: 123,
            expected: 6
        },
        {
            n: 7777731,
            expected: 39
        },
       
    ];
    testData.forEach(data => {
        const {n, expected} = data;
        const actual = getSummNumber(n);
        it( `Сумма цифр заданного числа ${n} является  ${expected} `,  () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMirrorNumber', () => {
    const testData = [
        {
            s: 52535,
            expected: 53525
        },
        {
            s: 74487,
            expected: 78447
        },
        {
            s: 9090,
            expected: 0909
        },
        {
            s: 123,
            expected: 321
        },
        {
            s: 54231,
            expected: 13245
        },
       
    ];
    testData.forEach(data => {
        const {s, expected} = data;
        const actual = getMirrorNumber(s);
        it( `Должно вернуть обратный вид числа ${s} как  ${expected} `,  () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('Day', () => {
    const testData = [
        {
            number: 1,
            expected: 'Понедельник'
        },
        {
            number: 2,
            expected: 'Вторник'
        },
        {
            number: 3,
            expected: 'Среда'
        },
        {
            number: 4,
            expected: 'Четверг'
        },
        {
            number: 5,
            expected: 'Пятница'
        },
        {
            number: 6,
            expected: 'Суббота'
        },
        {
            number: 7,
            expected: 'Воскресенье'
        },
        {
            number: 9,
            expected: 'Неверный номер'
        },
    ];
    testData.forEach(data => {
        const {number, expected} = data;
        const actual = Day(number);
        it(`Должно вернуть '${expected}' когда выбрано ${number} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('distanceBetweenPoint', () => {
    const testData = [
        {
            x1: 2,
            x2: 5,
            y1: 6,
            y2: 10,
            expected: 5,
        },
        {
            x1: 7,
            x2: 8,
            y1: 0,
            y2: 0,
            expected: 1,
        },
    ];
    testData.forEach( data => {
        const {x1, x2, y1, y2, expected} = data;
        const actual = distanceBetweenPoint(x1,x2,y1,y2);
        it(`Должно вернуть расстояние ${expected} между точкой x { ${x1},${x2} } и y { ${y1},${y2} }`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMinNumFromArray', () => {
    const testData = [
        {
            array: [12, -123, 55, 22, -777, 11],
            expected: -777
        },
        {
            array: [11, 12, 13, 14, 15, 16],
            expected: 11
        },
        {
            array: [21, 22, 23, 24, 25, 26],
            expected: 21
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = getMinNumFromArray(array);
        it(`Должно вернуть минимальный элемент ${expected} из массива ${array} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMaxNumFromArray', () => {
    const testData = [
        {
            array: [12, -123, 55, 22, -777, 11],
            expected: 55
        },
        {
            array: [11, 12, 13, 14, 15, 16],
            expected: 16
        },
        {
            array: [21, 22, 23, 24, 25, 26],
            expected: 26
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = getMaxNumFromArray(array);
        it(`Должно вернуть максимальный элемент ${expected} из массива ${array} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMaxNumberIndex', () => {
    const testData = [
        {
            array: [12, -123, 55, 22, -777, 11],
            expected: 2
        },
        {
            array: [11, 12, 13, 14, 15, 16],
            expected: 5
        },
        {
            array: [21, 22, 23, 24, 25, 26],
            expected: 5
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = getMaxNumberIndex(array);
        it(`Должно вернуть индекс максимального элемента ${expected} из массива ${array} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMinNumberIndex', () => {
    const testData = [
        {
            array: [12, -123, 55, 22, -777, 11],
            expected: 4
        },
        {
            array: [11, 12, 13, 14, 15, 16],
            expected: 0
        },
        {
            array: [21, 22, 23, 24, 25, 26],
            expected: 0
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = getMinNumberIndex(array);
        it(`Должно вернуть индекс минимального элемента ${expected} из массива ${array} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getSumOfArray', () => {
    const testData = [
        {
            array: [12, -123, 55, 22, -777, 11],
            expected: -90
        },
        {
            array: [11, 12, 13, 14, 15, 16],
            expected: 42
        },
        {
            array: [21, 22, 23, 24, 25, 26],
            expected: 72
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = getSumOfArray(array);
        it(`Должно вернуть сумму элементов ${expected} из массива ${array} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getQuantityOddElementsFromArray', () => {
    const testData = [
        {
            array: [12, -123, 55, 22, -777, 11],
            expected: 4
        },
        {
            array: [11, 12, 13, 14, 15, 16],
            expected: 3
        },
        {
            array: [21, 22, 23, 24, 25, 26],
            expected: 3
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = getQuantityOddElementsFromArray(array);
        it(`Должно вернуть ${expected} нечетных элемента ${expected} из массива ${array} `, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('MakeReversOfArray', () => {
    const testData = [
        {
            array: [1,2,3,4,5,6],
            expected: [6,5,4,3,2,1],
        },
        {
            array: [3],
            expected: [3],
        },
        {
            array: [7,11],
            expected: [11,7],
        },
        {
            array: [10,11,12,13,14,15],
            expected:[15,14,13,12,11,10],
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach( data => {
        const {array, expected} = data;
        const actual = MakeReversOfArray(array);
        it(`Должно вернуть реверс  [ ${expected}]  массив [ ${array} ]`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

describe('swapElementsInArray', () => {
    const testData = [
        {
            array: [7, 8, 9, 1, 2, 4],
            expected: [1, 2, 4, 7, 8, 9]
        },
        {
            array: [11, 13, 15, 16, 17, 19],
            expected: [16, 17, 19, 11, 13, 15]
        },
        {
            array: [20, 22],
            expected: [22, 20]
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = swapElementsInArray(array);
        it(`Должно вернуть - поменять местами две половины массива [ ${expected} ] из массива [ ${array} ] `, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

describe('bubbleSort', () => {
    const testData = [
        {
            array: [7, 8, 9, 1, 2, 4],
            expected: [9, 8, 7, 4, 2, 1]
        },
        {
            array: [11, 13, 17, 16, 15, 19],
            expected: [19, 17, 16, 15, 13, 11]
        },
        {
            array: [20, 22],
            expected: [22, 20]
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = bubbleSort(array);
        it(`Должно вернуть отсортированный массив [ ${expected} ]`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});


describe('selectSort ', () => {
    const testData = [
        {
            array: [7, 8, 9, 1, 2, 4],
            expected: [9, 8, 7, 4, 2, 1]
        },
        {
            array: [11, 13, 17, 16, 15, 19],
            expected: [19, 17, 16, 15, 13, 11]
        },
        {
            array: [20, 22],
            expected: [22, 20]
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = selectSort (array);
        it(`Должно вернуть отсортированный массив [ ${expected} ] `, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

describe('insertSort', () => {
    const testData = [
        {
            array: [7, 8, 9, 1, 2, 4],
            expected: [9, 8, 7, 4, 2, 1]
        },
        {
            array: [11, 13, 17, 16, 15, 19],
            expected: [19, 17, 16, 15, 13, 11]
        },
        {
            array: [20, 22],
            expected: [22, 20]
        },
        {
            array: [],
            expected: -1,
        },
    ];
    testData.forEach(data => {
        const {array, expected} = data;
        const actual = insertSort(array);
        it(`Должно вернуть отсортированный массив ${expected} `, () => {
            assert.deepEqual(actual, expected);
        });
    });
});
});
