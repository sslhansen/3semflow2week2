//2a
let nameArr = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

function myFilter(array, cb) {
    let filterArr = []
    array.forEach(element => {
        if (cb(element) == true) {
            filterArr.push(element)
        }
    });
    return filterArr
}

function checkBigLetter(a) {
   if (a.includes("a")) {
    return true
   }
}

console.log(myFilter(nameArr, checkBigLetter))


//2b
let intArr = [1, 2, 3 ,4 ,5]

function myMap(array, cb) {
let filteredArr = []
array.forEach(element => {
    filteredArr.push(cb(element))
});
return filteredArr
}

function add(a) {
    return a + 52;
}

console.log(myMap(intArr, add))
