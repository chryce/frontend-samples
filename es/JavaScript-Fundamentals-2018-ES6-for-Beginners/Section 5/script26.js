let myArray = ["Hello", "world", 6, 2, 55, 2332, 3434];
let c = 0;
while (myArray[c]) {
    console.log(myArray[c]);
    c++;
}
for (let a = 20; a > 10; a--) {
    console.log('a is ' + a);
}
for (let b = 0; b < myArray.length; b++) {
    console.log(myArray[b]);
}
let myObj = {
    firstName: "Laurence"
    , lastName: "Svekis"
    , age: 35
};
for (let x in myObj) {
    console.log(myObj[x]);
    console.log(x);
}
for (let y of myArray) {
    console.log(y);
}
let myStr = "JavaScript Course";
for (let letter of myStr) {
    console.log(letter);
}