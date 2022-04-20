import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>DSA</h1>`;

/* 1- Bubble sort
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
console.log(arr);

// 2- Selection Sort
let arr2 = [8, 6, 7, 9, 4, 3];

function findMe(arr2, startIndex) {
  let minIndexTillNow = startIndex;
  for (let i = startIndex; i < arr2.length; i++) {
    if (arr2[minIndexTillNow] > arr2[i]) {
      minIndexTillNow = i;
    }
  }
  return minIndexTillNow;
}

for (let i = 0; i < arr2.length; i++) {
  let minIndex = findMe(arr2, i);
  let temp2 = arr2[i];
  arr2[i] = arr2[minIndex];
  arr2[minIndex] = temp2;
}

console.log(arr2);

// 3-Insertion Sort

let arr3 = [6, 8, 7, 4, 1, 3, 2];

for (let i = 1; i < arr3.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr3[j - 1] > arr3[j]) {
      let temp = arr3[j];
      arr3[j] = arr3[j - 1];
      arr3[j - 1] = temp;
    } else {
      break;
    }
  }
}

console.log(arr3);

/*4- Inbuild Sort
In this method sorting will be happens as a string.
To correct this we have to pass custom compare function */

let arr4 = [9, 5, 7, 55, 74, 2];

// 1st Method:-
function asending(a, b) {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
}

console.log(arr4.sort(asending));

// 2nd Method:-

console.log(arr4.sort((a, b) => a - b));

/*Stable sort :- 
Stable means the order of input elements is unchanged except where change is required to satisfy the requirements. 
A stable sort applied to a sequence of equal elements will not change their order. 
In-place means that the input and output occupy the same memory storage space.(within array sort can be done)
 stableSort = [8,6,9,4,4,5]
stable sort = bubble, Insertion
unstable sort = Selection*/
