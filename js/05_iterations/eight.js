// Reduce method -- used in adding numbers without editing new numbers in every iterations, it work with accumulator(acc) and currentvalue(currval), and its mostly used in developing shopping cart applications

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
    
// }, 0)

// reduce method using arrow function (another easy way of writing reduce method)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);


// shopping cart example with reduce method--

const shoppingCart = [
    {
        iteName : "js course",
        price: 3999
    },
    {
        iteName : "py course",
        price: 1299
    },
    {
        iteName : "app dev course",
        price: 5999
    },
    {
        iteName : "data ana course",
        price: 12999
    },
    
]

const priceToPay = shoppingCart.reduce ( (acc, item) => acc + item.price , 0)
console.log(priceToPay);
 



