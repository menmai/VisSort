export default function quickSort(arr, low, high) {
    const anims = [];
    if(arr.length <= 1) return arr;
    quickSortHelper(arr, low, high, anims);
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
        anim.swap = null;
        anim.comparison = [j, high];
        if(arr[j] < pivot){
            i++;
            anim.swap = [i, j];
            let holder = arr[i];
            arr[i] = arr[j];
            arr[j] = holder;
        }
        anims.push(anim);
    }

    const anim = {};
    anim.comparison = [i + 1, high];
    anim.swap = [i + 1, high];
    anims.push(anim)

    let holder = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = holder;
    
    return i + 1;
}

