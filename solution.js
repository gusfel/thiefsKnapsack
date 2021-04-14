/*Thief's Knapsack

A Thief has a knapsack that can hold X lbs of stolen goods
Each stolen good is worth a certain amount of cash, but
the stolen good also weighs a certain weight. This means that
the thief has to pick an optimal combination of items!
The Thief can't pick the same item twice.

What is the maximum worth of goods that the thief can steal?
*/


const thiefPack = (packCap, itemValArr, itemWeightArr) => {
  const currIndex = itemValArr.length - 1;
  if (packCap <= 0 || currIndex - 1 === -1) {
    return 0;
  }
  if (itemWeightArr[currIndex] > packCap) {
    return thiefPack(itemValArr, itemWeightArr, packCap);
  } else {
    let included = values[currIndex] + thiefPack(packCap - itemWeightArr[currIndex], itemValArr, itemWeightArr);
    let excluded = thiefPack(packCap, itemValArr, itemWeightArr);
    return Math.max(included, excluded);
  }
};


// const thiefPack = (packCap, itemValArr, itemWeightArr) => {

//   let maxVal = 0;

//   const helper = (arrW, arrV, testVal, testWeight) => {

//     for (let i = 0; i < arrW.length; i++) {
//       // let testVal = 0;
//       // let testWeight = 0;
//       const currWeight = arrW[i];
//       const currVal = arrV[i];
//       testVal += currVal;
//       testWeight += currWeight;
//       if (testWeight > packCap) {
//         let testVal = 0;
//         let testWeight = 0;
//         return;
//       }
//       if (testWeight < packCap && testVal > maxVal) {
//         maxVal = testVal;
//         helper(arrW.splice(i, 1), arrV.splice(i, 1), testVal, testWeight);
//       }
//     }
//   };

//   helper(itemValArr, itemWeightArr, 0, 0);
//   return maxVal;
// };