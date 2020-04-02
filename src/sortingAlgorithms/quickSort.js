export function quickSort(arr, low, high) {
    const anims = [];
    if(arr.length <= 1) return arr;
    const auxArray = arr;
    quickSortHelper(auxArray, low, high, anims);
    return anims;
}

function quickSortHelper(arr, low, high, anims) {
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

