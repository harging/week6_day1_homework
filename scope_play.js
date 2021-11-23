// const secretsFunction = function() {
//     var pinCode = [5,4,3,9]
// };

// secretsFunction()
// console.log(pinCode)

// var name = "Jill";

// var pinCode;

// const secretsFunction = function() {
//     let pinCode = [5,4,3,9];
// }

// secretsFunction()
// console.log(pinCode)

const filterNames = function(name, letter){
    var filteredNames = [];
    
    for(let name of names){
        if(name[0] === letter){
            filteredNames.push(name);
        }
    }

    return filteredNames;
}

var students = ["Alice", "Bob", "Ally"]
var filteredSudents = filterNames(students, "A");
console.log(filteredSudents)