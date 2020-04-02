import mergeSort from '../../sortingAlgorithms/mergeSort.js';
import quickSort from '../../sortingAlgorithms/quickSort.js';

// Tests were completed before moving into animation phase

/* export function testMergeSort() {
    const arr = [];
    for(let i = 0; i < 100; i++) {
        for(let i = 0; i < randomInt(100, 1000); i++) {
            arr.push(randomInt(-1000, 100));
        }
        const msSorted = arr.slice().sort((a, b) => a - b);
        const qsSorted = mergeSort(arr);
        console.log(ArraysAreEqual(jsSorted, msSorted));
    }
}; */

/* export function testQuickSort() {
    const arr = [];
    for(let i = 0; i < 100; i++) {
        for(let i = 0; i < randomInt(100, 1000); i++) {
            arr.push(randomInt(-1000, 100));
        }
        const jsSorted = arr.slice().sort((a, b) => a - b);
        const qsSorted = quickSort(arr, 0, arr.length - 1).returnArray;
        console.log(ArraysAreEqual(jsSorted, qsSorted));
    }
}; */


function ArraysAreEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
        for(let i = 0; i <= arr1.lenth; i++) {
            if(arr1[i] !== arr2[i]) return false;
        }
    return true;
} 

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min)
} 