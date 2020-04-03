// Create and return animations array resulting from the bubble sort algorithm

export default function getBubbleSortAnims(arr) {
    const anims = [];
    if(arr.length <= 1) return arr;

    let swapped = false;

    for(let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            const anim = {};
            anim.comparison = [i, j];
            anim.swap = null;
            if(arr[j] > arr[j + 1]) {
                const holder = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = holder;
                anim.swap = [j, j + 1];
                anims.push(anim);
                swapped = true;
            }
        }

        if(!swapped)
            break;

    }
    return anims;
}
