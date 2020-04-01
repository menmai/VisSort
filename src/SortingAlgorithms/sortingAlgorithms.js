export function mergeSort(array) {
    const anims = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, anims)
    return anims;
}

export function mergeSortHelper (
    mainArray,
    startIdx,
    endIdx,
    auxArray,
    anims
) {
    if(startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArray, startIdx, midIdx, mainArray, anims);
    mergeSortHelper(auxArray, midIdx + 1, endIdx, mainArray, anims);
    doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, anims);
}

function doMerge(
    mainArray,
    startIdx,
    midIdx,
    endIdx,
    auxArray,
    anims
) {
    let k = startIdx;
    let i = startIdx;
    let j = midIdx + 1;
    while(i <= midIdx && j <= endIdx) {
        const anim = {};
        anim.comparison = [i, j];
        if(auxArray[i] <= auxArray[j]) {
            anim.swap = [k, auxArray[i]];
            mainArray[k++] = auxArray[i++];
        } else {
            anim.swap = [k, auxArray[j]];
            mainArray[k++] = auxArray[j++];
        }
        anims.push(anim);
    }
    while (i <= midIdx) {
        anims.push({
            comparison: [i, i],
            swap: [k, auxArray[i]],
        });
        mainArray[k++] = auxArray[i++];
    }
    while (j <= endIdx) {
        anims.push({
            comparison: [j, j],
            swap: [k, auxArray[j]],
        });
        mainArray[k++] = auxArray[j++];
    }
}
    

export function quickSort(arr, low, high) {
    const anims = [];
    if(arr.length <= 1) return arr;
    const auxArray = arr;
    quickSortHelper(auxArray, low, high, anims);
    return anims;
}

export function quickSortHelper(arr, low, high, anims) {
    if(low < high) {
        const partitionIndex = partition(arr, low, high, anims);
        quickSortHelper(arr, low , partitionIndex - 1, anims);
        quickSortHelper(arr, partitionIndex + 1, high, anims);
    }
}

function partition(arr, low, high, anims){
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++){
        const anim = {};
        anim.comparison = [j, high];
        if(arr[j] < pivot){
            i++;
            anim.swap = [i, j];
            let holder = arr[i];
            arr[i] = arr[j];
            arr[j] = holder;
        }
        if(!anim.swap) anim.swap = null;
        anims.push(anim);
    }
    let holder = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = holder;
    let anim = {};
    anim.comparison = [i + 1, high];
    anim.swap = [i + 1, high];
    anims.push(anim)
    return i + 1;
}

