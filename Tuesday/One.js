// 1a
let nameArr = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]
let onlyA = nameArr.filter(x => x.includes("a"))
console.log(onlyA)
// 2a
let reverse = nameArr.map(x => x.split().reverse().join())
console.log(reverse)