const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 20000;
    actual = sum(10000, 10000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -60;
    actual = sum(-40, -20);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 42;
    actual = sum(0, 42);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 1;
    actual = subtract(5, 4);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 20000;
    actual = subtract(30000, 10000);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 100000000;
    actual = multiply(10000, 10000);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

 test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(10, 5);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 1;
    actual = divide(10000, 10000);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

 test('can get modulus of two small positive numbers', () => {
    expected = 0;
    actual = modulus(10, 2);
    expect(actual).toBe(expected);
  });

  test('can get modulus of two large positive numbers', () => { 
    expected = 0;
    actual = modulus(10000, 10000);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

 test('can tell if small positive number is even', () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);
  });

  test('can tell if large positive number is even', () => { 
    expected = true;
    actual = even(100000000000000000);
    expect(actual).toBe(expected);
  });

  test('can tell if large positive number is not even', () => {
    expected = false;
    actual = even(1000000000005);
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {

 test('can tell if small positive number is odd', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
  });

  test('can tell if small positive number is odd', () => { 
    expected = true;
    actual = odd(200000000000005);
    expect(actual).toBe(expected);
  });

  test('can tell if large positive number is not odd', () => { 
    expected = false;
    actual = odd(20000000);
    expect(actual).toBe(expected);
  });

});
