// 3a
var numbers = [1, 3, 5, 10, 11];

var resultArr = numbers.map(x => fixarr(x, numbers[numbers.indexOf(x) + 1]))

console.log(resultArr)

function fixarr(n1, n2) {
    if (Number.isInteger(n2)) {
        return n1 + n2
    } else {
        return n1
    }

}

//3b
let nameArr = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

let ahrefArr = nameArr.map(element => {
    return "<a href=\"\">" + element + "</a>"
})

let ahrefArrWithNav = ahrefArr.join("")
let finished = "<nav>" + ahrefArrWithNav + "</nav>"
console.log(finished)

//3c
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];
var finisherino = "<table>" + persons.map(element => {
    return "<tr> <th>" + element.name + "</th>" + "<th>" + element.phone + "</th> </tr>"
}).join("") + "</table>"
console.log(finisherino)