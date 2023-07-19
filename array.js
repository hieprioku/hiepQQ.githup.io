let num = [1,2,3]
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];   
}
console.log(sum);


let number = [1,2,3]
let max_val = number.reduce(function (accumulator,element) {
 return (accumulator>element) ? accumulator:element 
});
console.log(number);
console.log("max:",max_val);


let numbers = [10,8,2,6]
let min_val = numbers.reduce(function (accumulator,element) {
 return (accumulator<element) ? accumulator:element 
});
console.log(numbers);
console.log("min:",min_val);


let arrNumber = [1,2,3,4,5]
let searchNumber = numbers.includes(0,2);
console.log(searchNumber);



let array =[1,2,3,4,5]
let first = 0;
let last = array.length -1;
while (first < last) {
    let b = array[first];
    array[first] = array[last];
    array[last] = b;
    first++;
    last--;
 }
 console.log(array);
 


const numArray = [1,2,3,4,5]
const evenNumbers = numArray.filter[ele => ele % 2 == 0]
.map[ele => ele ** 2];
console.log(evenNumbers);



let arrSort = [4,2,9,5,1]
arrSort.sort(function (a,b) {
    return a-b;
});
console.log(arrSort);