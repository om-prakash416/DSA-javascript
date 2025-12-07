//write a function that returns the numbers of negative numbers in an array

function countNegativeNumbers(arr) {
    let count =0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            count++;
        }

    }
    return count;
}
    
let arr = [1, -2, -3, -4, -5, 6];

console.log(countNegativeNumbers(arr));
