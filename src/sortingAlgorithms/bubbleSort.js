export default function bubbleSort(arr) {
    const anims = [];
    if(arr.length <= 1) return arr;
    bubbleSortHelper(arr, anims);
    return anims;
}

function bubbleSortHelper() {
    
}