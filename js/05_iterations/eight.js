// Reduce method -- used in adding numbers without editing new numbers in every iterations, it work with accumulator(acc) and currentvalue(currval), and its mostly used in developing shopping cart applications

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
    
}, 0)

console.log(myTotal);











