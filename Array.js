/*
1) Find the number of occurances.  // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

const arr = [2,4,5,2,1,2];

const val = 2;

let inc =0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==val)
    inc++;    
}

console.log(inc);
