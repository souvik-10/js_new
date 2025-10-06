// a problem in for each loop --

// const coding = ["java", "py", "cpp", "js"]

//  const values = coding.forEach( (item) => {
//     console.log(item);
//     return item // this return aint working in this for each loop case (so remember that for each loop doesnt return anything it will print undefined ) 
     
    

// })
// console.log(values);

//  ******************************  filter -- it is used to filter things which you want from the whole array or function it check the condition is true or not then it execute

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNums.filter ( (num) => num > 5 )
// console.log(newNums);

// a problem in this filter -- 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNums.filter ( (num) => { // due to ({})scope it will not return anything 
//    return num > 5 // so we to use (return) always in this case to execute it  

// })
// console.log(newNums);

// using for each loop except filter method  --- 

// const newNums = []

// myNums.forEach( (num)=> {
//     if (num > 5) {
//         newNums.push(num)
//     }

// })
// console.log(newNums);

// Books exapmle of filter --

const books = [
    { title: " Book One ", genre: " Fiction", publish: 1981, 
        edition: 2004 },
    { title: " Book Two ", genre: " Non-Fiction", publish: 1991, 
        edition: 2007 },
    { title: " Book Three ", genre: " History ", publish: 1998, 
        edition: 2009 },
    { title: " Book Four ", genre: " Non-Fiction ", publish: 1997, 
        edition: 2007 },
    { title: " Book Five ", genre: " Science ", publish: 2000, 
        edition: 2004 },
    { title: " Book Six ", genre: " Fiction", publish: 1981, 
        edition: 2006 },
    { title: " Book Seven ", genre: " History ", publish: 1971, 
        edition: 2002 },
    { title: " Book Eight ", genre: " Fiction", publish: 2002, 
        edition: 2004 },
    { title: " Book One ", genre: " Science ", publish: 1961, 
        edition: 2010 },
    { title: " Book Nine ", genre: " Non-Fiction ", publish: 1998, 
        edition: 2012 }
];

// const userBooks = books.filter ( (bk)=> bk.genre === " History " )

// console.log(userBooks);


// some other filtration in the books filter method --

let userBooks = books.filter ( (bk)=> bk.genre === " History " )

userBooks = books.filter ( (bk) =>  { return bk.publish >= 2000 && bk.genre === " Science "}) // after && the only science book condition will print 

console.log(userBooks);




















