// switch case is used to select one of many code blocks to be executed.
// It is often used as an alternative to multiple if...else statements when you need to compare the same variable or expression against different values.
// It can make your code more readable and organized when dealing with multiple conditions based on a single variable.
// 


// switch case syntax---

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// switch case example ---

const month = 9

switch (month) {
    case 1:
        console.log("january")
        
        break;
        
    case 2:
        console.log("february")
        
        break;
        
    case 3:
        console.log("march")
        
        break;
        
    case 4:
        console.log("april")
        
        break;
        
    case 5:
        console.log("may")
        
        break;
        
    case 6:
        console.log("june")
        
        break;
        
    case 7:
        console.log("july")
        
        break;
        
    case 8 :
        console.log("august")
        
        break;
        
    case 9:
        console.log("september")
        
        break;
        
    case 10:
        console.log("october")
        
        break; // break is used to exit the switch case once a case is matched otherwise it will execute all the cases below the matched case also
        
    case 11:
        console.log("november")
        
        break;
        
    case 12:
        console.log("december")
        
        break;

    default: // if none of the cases match then default case will be executed and if we dont use break in above cases but default will still not be executed if any case is matched
        console.log("invalid month")
        
        break;
}








