// write a function that searches for an element in an array and returns the index ,if the element is not present then just return -1

function searchElementIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6];
let element = 4;

console.log(searchElementIndex(arr, element));

