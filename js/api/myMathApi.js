(function () {
  'use strict';

  var DEFAULT_NUM_OF_PROBLEMS = 10;
  var DEFAULT_LEVEL = 'one';

  function getRandomNumber(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
  }

  function getRandomArrayElem(arr) {
    return arr[getRandomNumber(0, arr.length - 1)];
  }

  function getRandomFactor(num) {
    var factors = [],
      i;

    for (i = 1; i < num / 2 + 1; i++) {
      if (num % i == 0) {
        factors.push(i);
      }
    }
    factors.push(num);
    return getRandomArrayElem(factors);
  }

  function getRandomOperation() {
    var op = getRandomNumber(0, 3);
    if (op === 0) {
      return 'add';
    }
    if (op === 1) {
      return 'sub';
    }
    if (op === 2) {
      return 'mul';
    }
    if (op === 3) {
      return 'div';
    }
  }

  function generateProblem(level, type) {
    var problem = {}, UL;

    if (level === 'one')   { UL = 9;  }
    if (level === 'two')   { UL = 49; }
    if (level === 'three') { UL = 99; }

    problem.n1 = getRandomNumber(0, UL);
    problem.n2 = getRandomNumber(0, UL);
    
    if(type) {
      problem.op = type;
    }
    else {
      problem.op = getRandomOperation();
    }

    if (problem.op === 'add') { problem.opSym = '+'; }
    if (problem.op === 'sub') { problem.opSym = '-'; }
    if (problem.op === 'mul') { problem.opSym = 'x'; }

    if (problem.op === 'div') {
      problem.opSym = '/';

      problem.n1 = getRandomNumber(1, UL);
      problem.n2 = getRandomFactor(problem.n1);
    }

    problem.ans = computeAnswer(problem);

    return problem;
  }

  function computeAnswer(problem) {
    if (problem.op === 'add') { return problem.n1 + problem.n2; }
    if (problem.op === 'sub') { return problem.n1 - problem.n2; }
    if (problem.op === 'mul') { return problem.n1 * problem.n2; }
    if (problem.op === 'div') { return problem.n1 / problem.n2; }
  }

  module.exports = {

    getProblems: function (req, res) {
      var problems = [],
        i, limit, level, type;

      limit = req.query.limit || DEFAULT_NUM_OF_PROBLEMS;
      level = req.query.level || DEFAULT_LEVEL;
      type  = req.query.type  || null;

      for (i = 0; i < limit; i++) {
        problems.push(generateProblem(level, type));
      }
      res.json(problems);
    }
  };

}());