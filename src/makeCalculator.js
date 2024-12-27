'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.operate = (callback, number) => {
    return callback(number);
  };

  calculator.add = (number) => {
    calculator.result += number;

    return calculator;
  };

  calculator.subtract = (number) => {
    calculator.result -= number;

    return calculator;
  };

  calculator.multiply = (number) => {
    calculator.result *= number;

    return calculator;
  };

  calculator.divide = (number) => {
    calculator.result /= number;

    return calculator;
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
