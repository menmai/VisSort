export function mergeSort(array) {
    const anims = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, anims)
    return anims;
}

function mergeSortHelper (
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

