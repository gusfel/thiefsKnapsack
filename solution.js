/*Thief's Knapsack

A Thief has a knapsack that can hold X lbs of stolen goods
Each stolen good is worth a certain amount of cash, but
the stolen good also weighs a certain weight. This means that
the thief has to pick an optimal combination of items!
The Thief can't pick the same item twice.

What is the maximum worth of goods that the thief can steal?
*/
const thiefPack = (packCap, itemValArr, itemWeightArr) => {
  let testVal = 0;
  let testWeight = 0;
  let maxVal = 0;

  const helper = (arrW, arrV) => {
    for (let i = 0; i < arrW.length; i++) {
      const currWeight = arrW[i];
      const currVal = arrV[i];
      testVal += currVal;
      testWeight += currWeight;
      if (testWeight < packCap && testVal > maxVal) {
        maxVal = testVal;
      }
    }
  };

  helper(itemValArr, itemWeightArr);
  return maxVal;
};