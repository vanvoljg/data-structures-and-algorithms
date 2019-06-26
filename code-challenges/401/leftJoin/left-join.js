'use strict';

const leftJoin = (leftMap, rightMap) => {
  const outputMap = new Map();
  for (const [leftKey, leftValue] of leftMap) {
    const rightValue = rightMap.get(leftKey) || null;
    outputMap.set(leftKey, [leftValue, rightValue]);
  }
};

module.exports = leftJoin;
