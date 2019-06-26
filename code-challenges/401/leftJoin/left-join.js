'use strict';

const leftJoin = (leftMap, rightMap) => {
  if (!(leftMap instanceof Map && rightMap instanceof Map)){
    throw new TypeError('Inputs must be maps');
  }
  const outputMap = new Map();
  for (const [leftKey, leftValue] of leftMap) {
    const rightValue = rightMap.get(leftKey) || null;
    outputMap.set(leftKey, [leftValue, rightValue]);
  }
  return outputMap;
};

module.exports = leftJoin;
