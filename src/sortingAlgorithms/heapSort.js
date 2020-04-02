export default function heapSort(arr) {
    const anims = [];
    if(arr.length <= 1) return arr;
    heapSortHelper(arr, anims);
    return anims;
}

function heapSortHelper(arr, anims) {
    const n = arr.length;

    for(let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i, anims);
    
    for(let i = n - 1; i > 0; i--){
        const anim = {};
        anim.comparison = [0, i];

        let holder = arr[0];
        anim.swap = [0, i];
        arr[0] = arr[i];
        arr[i] = holder;
        anims.push(anim);

        heapify(arr, i, 0, anims);
    }
}

function heapify(arr, n, i, anims) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    const anim = {};
    anim.comparison = [0,0];
    anim.swap = null;

    if(l < n){

        if(arr[l] > arr[largest])
        largest = l;
    }

    if(r < n){

        if(arr[r] > arr[largest])
        largest = r;
    }

    if(largest !== i) {
        const holder = arr[i];
        anim.swap = [i, largest];
        arr[i] = arr[largest];
        arr[largest] = holder;

        anims.push(anim);

        heapify(arr, n, largest, anims);
    }
}

