const oppositeNumber = require('./oppositeNumber');
const removeChar  = require('./removeFirstAndLastCharacter');
const repeatStr  = require('./stringRepeat');
const sumOfPositive = require('./sumOfPositive');
  


describe ('Test oppositeNumber', () => {
  const myTest = [
    {
      in: 0, 
      expected: 0
    },
    {
      in: 1, 
      expected: -1
    },
    {
      in: -1, 
      expected: 1
    },      
  ];
  myTest.forEach(test => {
    it(
      `На входе: ${test.in} На выходе: ${test.expected}`,
      () => {
        const res = oppositeNumber(test.in);
        expect(res).toBe(test.expected)}
    )
  })
});


describe ('Test removeFirstAndLastCharacter', () => {
  const myTest = [
    {
      in: 'qwerty', 
      expected: 'wert'
    },
    {
      in: 'asdfghjk', 
      expected: 'sdfghj'
    },
    {
      in: 'let me be your cat', 
      expected: 'et me be your ca'
    },      
  ];
  myTest.forEach(test => {
    it(
      `На входе: ${test.in} На выходе: ${test.expected}`,
      () => {
        const res = removeChar(test.in);
        expect(res).toBe(test.expected)}
    )
  })
});



describe ('Test stringRepeat', () => {
  const myTest = [
    {
      in: [1, 'veniamin'],
      expected: 'veniamin'
    }, 
    {
      in: [2, 'cat'],
      expected: 'catcat'
    },
    {
      in: [3, 'dog'],
      expected: 'dogdogdog' 
    },      
  ];
  myTest.forEach(test => {
    it (
      `На входе: ${test.in} На выходе: ${test.expected}`,
      () => {
        const res = repeatStr(...test.in);
        expect(res).toBe(test.expected);
      }
    );
  });
});



describe ('Test sumOfPositive', () => {
  const myTest = [
    {
      in: [1, 2, 3, 4, 5], 
      expected: 15
    },
    {
      in: [-8, -2, 11, -5, -1], 
      expected: 11
    },
    {
      in: [], 
      expected: 0
    },
    {
      in: [-1, -2, -3, -4, -5], 
      expected: 0
    },
  ];
  myTest.forEach(test => {
    it(
      `На входе: ${test.in} На выходе: ${test.expected}`,
      () => {
        const res = sumOfPositive(test.in);
        expect(res).toEqual(test.expected)}
    )
  })
});




    
