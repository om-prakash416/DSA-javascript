// write a function that returns the second largest number in an array


function findSecondLargestNumber(arr) {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++) {

        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [3, 5, 1, 8, 2, 7];

console.log(findSecondLargestNumber(arr));