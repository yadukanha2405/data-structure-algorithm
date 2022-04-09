import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>DSA</h1>`;

/* Bubble sort
Bubble sort- smaller bubble tends to move faster
In a first intrasession highest element on the last 
In 2nd,3rd …. intrasession 2nd, 3rd …highest element will be sorted and for last element we don’t require to sort it will always be sorted if remaining elements sorted.
Method will be applicable arr. length-1/n-1 */

let arr = [8, 6, 7, 2, 4, 1];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
// console.log(arr);

// Selection Sort
let arr2 = [8, 6, 7, 9, 4, 3];

function findMe(arr2, startIndex) {
  let minIndexTillNow = arr2[startIndex];
  for (let i = minIndexTillNow; i < arr2.length; i++) {
    if (arr2[minIndexTillNow] > arr2[i]) {
      minIndexTillNow = i;
    }
  }
  return minIndexTillNow;
}

for (let i = 0; i < arr2.length; i++) {
  let minIndex = findMe(arr2, startIndex);
  let temp2 = arr2[i];
  arr2[i] = arr2[minIndex];
  arr2[minIndex] = temp2;
}
