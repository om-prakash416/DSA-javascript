// write a fn that returns the largest number in an array

function findLargestNumber(arr) {

    let largest = arr[0];

    for(let i=1; i<arr.length; i++) {

        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [-1, -2, -3, -4, -5, -6];

console.log(findLargestNumber(arr));