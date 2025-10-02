// javascript execution context 
// means how the js code will execute, the whole process


// example- 
let val1 = 5
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total

}
let result1 = addNum(val1, val2)
let result2 = addNum(2, 8)





// steps of execution --
// (FIRST STEP)

// 1) {} --- Global EC, it have value of (this) and in browser its windows and object
// then we have some more EC, Functional execution context and Eval Ec(not neccessary)

// 2) {} ---- i) memory creation phase or creation phase (the var,num and values are declared and stored in the memory)
//                 val1 ---= undefined
//                 val2 ---= undefined
//               addNUM ---= defination(the whole function will be considered as defination)
//              result1 ---= undefined
//              result2 ---= undefined



// 3) {} ---- ii) execution phase --- all the execution and mathematical expression will happen here 
//                    val1 ---= 5
//                    val2 ---= 5
//                 addNum  ---=  every time a function is their it will create a box, known as new executional context
//                               inside this box, new variable environment + execution thread
//                                      (this box gets delete after that )
//                  result1 ---= 10
//                  result2 ---= 


//(THIRD STEP)
//                 (for the above addNum function a box will create another time )
// so all the process will repeat again,
//1) global Ec

// 2) memory creation phase --- 
//           all the values of SECOND STEP

// 3) execution phase ---
//       all the values of SECOND STEP and the total will again go back to Global exexution context


//              (for the above function everytime a box will create and all the process will repeat again)
//(SECOND STEP)


// so, 
//1) Global EC 

// 2) memory creation phase ----
//            val1 = undefined
//            val2 = undefined
//            total = undefined


// 3) execution phase --
//         num1 = 5
//         num2 = 5
//       total = 10
//

