// write a function that returns the smallest number in an array


function findSmallestNumber(arr) {
    let smallest = arr[0];

    for(let i=1; i<arr.length; i++) {

        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [-3, -5, -1, 8, 2, 7];

console.log(findSmallestNumber(arr));