import { Operation, Question, Terms } from "../types";

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const operationOptions = ["+", "-", "x", ":"] as Operation[];

const getOperation = (level: number): Operation => {
  // levels 1, 2, 3, 4 => only +
  if (level <= 4) return "+";
  // levels 5, 6 => + or -
  let max = 1;
  // levels 7, 8, 9, => +, - or x
  if (level > 6 && level <= 9) max = 2;
  // levels above 9 => +, -, x or :
  if (level > 9) max = 3;
  const randomIndex = randomIntFromInterval(0, max);
  return operationOptions[randomIndex];
};

const bigNumbers = [100, 225, 345, 459, 533, 670, 790, 884, 954, 1349];

const getBigNumber = () => {
  const randomIndex = randomIntFromInterval(0, 9);
  return bigNumbers[randomIndex];
};

const getIntroTerms = (
  level: number,
  operation: Operation,
  minusLimit?: number,
): Terms => {
  let term1: number;
  let term2: number;
  // +
  if (level === 1) {
    term1 = randomIntFromInterval(0, 10);
    term2 = randomIntFromInterval(0, 10);
  } else if (level === 2) {
    term1 = randomIntFromInterval(1, 20);
    term2 = randomIntFromInterval(1, 20);
  } else if (level === 3) {
    term1 = randomIntFromInterval(10, 30);
    term2 = randomIntFromInterval(10, 30);
  } else if (level === 4) {
    term1 = randomIntFromInterval(10, 50);
    term2 = randomIntFromInterval(10, 50);
  } else {
    // + or -
    if (operation === "+") {
      term1 = getBigNumber();
      term2 = randomIntFromInterval(10, 100);
    } else {
      term1 = randomIntFromInterval(20, minusLimit || 40);
      term2 = randomIntFromInterval(0, term1);
    }
  }
  return { term1, term2 };
};

const divisions = [
  { term1: 3, term2: 1 },
  { term1: 3, term2: 3 },
  { term1: 4, term2: 2 },
  { term1: 6, term2: 2 },
  { term1: 6, term2: 3 },
  { term1: 6, term2: 6 },
  { term1: 8, term2: 4 },
  { term1: 10, term2: 2 },
  { term1: 10, term2: 5 },
  { term1: 12, term2: 3 },
  { term1: 12, term2: 4 },
  { term1: 12, term2: 6 },
  { term1: 20, term2: 2 },
  { term1: 20, term2: 10 },
] as Terms[];

const hardDivisions = [
  { term1: 16, term2: 4 },
  { term1: 16, term2: 8 },
  { term1: 20, term2: 4 },
  { term1: 20, term2: 5 },
  { term1: 21, term2: 7 },
  { term1: 25, term2: 5 },
  { term1: 24, term2: 6 },
  { term1: 28, term2: 7 },
  { term1: 30, term2: 5 },
  { term1: 30, term2: 6 },
  { term1: 35, term2: 7 },
  { term1: 40, term2: 2 },
  { term1: 40, term2: 8 },
  { term1: 42, term2: 2 },
  { term1: 42, term2: 6 },
  { term1: 42, term2: 7 },
  { term1: 45, term2: 3 },
  { term1: 45, term2: 5 },
  { term1: 45, term2: 9 },
  { term1: 48, term2: 4 },
  { term1: 48, term2: 6 },
  { term1: 63, term2: 7 },
  { term1: 63, term2: 9 },
  { term1: 64, term2: 2 },
  { term1: 64, term2: 4 },
  { term1: 64, term2: 8 },
  { term1: 72, term2: 9 },
  { term1: 75, term2: 5 },
  { term1: 81, term2: 9 },
] as Terms[];

const getDivision = (level: number): Terms => {
  if (level <= 12) {
    const randomIndex = randomIntFromInterval(0, 13);
    return divisions[randomIndex];
  } else if (level <= 16) {
    const randomIndex = randomIntFromInterval(0, 14);
    return hardDivisions[randomIndex];
  }
  const randomIndex = randomIntFromInterval(0, 28);
  return hardDivisions[randomIndex];
};

const getMediumTerms = (level: number, operation: Operation) => {
  let term1;
  let term2;
  if (operation === "+" || operation === "-") {
    const terms = getIntroTerms(level, operation, 100);
    term1 = terms.term1;
    term2 = terms.term2;
  } else if (operation === "x") {
    if (level <= 10) {
      term1 = randomIntFromInterval(0, 10);
      term2 = randomIntFromInterval(0, 10);
    } else {
      term1 = randomIntFromInterval(0, 20);
      term2 = randomIntFromInterval(0, 10);
    }
  } else {
    const terms = getDivision(level);
    term1 = terms.term1;
    term2 = terms.term2;
  }
  return { term1, term2 };
};

const getResult = (term1: number, term2: number, operation: Operation) => {
  if (operation === "+") {
    return term1 + term2;
  } else if (operation === "-") {
    return term1 - term2;
  } else if (operation === "x") {
    return term1 * term2;
  }
  return term1 / term2;
};

export const getQuestion = (level: number = 1): Question => {
  let term1;
  let term2;
  let operation = getOperation(level);
  if (level <= 6) {
    const terms = getIntroTerms(level, operation);
    term1 = terms.term1;
    term2 = terms.term2;
  } else {
    const terms = getMediumTerms(level, operation);
    term1 = terms.term1;
    term2 = terms.term2;
  }
  const result = getResult(term1, term2, operation);
  return {
    term1,
    term2,
    operation,
    result,
  };
};
