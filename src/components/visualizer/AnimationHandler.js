// Animation handling functions. Idea is to grab the array bars from the document by class name
// Then use the passed animations arrays to applying styling. setTimeout is used to delay styling changes
// Timeout delay is dependeny on the passed timeIncrements and is in milliseconds (ms)

// runAnimation supports heapSort, quickSort and bubbleSort

export default function runAnimation(anims, timeIncrements) {
    for (let i = 0; i < anims.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneCompare, barTwoCompare] = anims[i].comparison;
        let barOneStyle = arrayBars.item(barOneCompare).style;
        let barTwoStyle = arrayBars.item(barTwoCompare).style;
        setTimeout(() => {
            if(anims[i].swap != null) {
                const [barOneSwap, barTwoSwap] = anims[i].swap;
                barOneStyle = arrayBars.item(barOneSwap).style;
                barTwoStyle = arrayBars.item(barTwoSwap).style;
                const temp = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = temp;
            }
            barOneStyle.backgroundColor = 'red';
            barTwoStyle.backgroundColor = 'red';
            setTimeout(() => {
                barOneStyle.backgroundColor = 'lightblue';
                barTwoStyle.backgroundColor = 'lightblue';
            }, Math.round(timeIncrements * 0.6));
        }, i * timeIncrements);
    }
} 

// runMSAnimation supports mergeSort

export function runMSAnimation(anims, timeIncrements) {
    for (let i = 0; i < anims.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneCompare, barTwoCompare] = anims[i].comparison;
        const barTwoStyle = arrayBars.item(barTwoCompare).style;
        setTimeout(() => {
            const [barOneIdx, newHeight] = anims[i].swap;
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}%`;
            barOneStyle.backgroundColor = 'red';
            barTwoStyle.backgroundColor = 'red';
            setTimeout(() => {
                barOneStyle.backgroundColor = 'lightblue';
                barTwoStyle.backgroundColor = 'lightblue';
            }, Math.round(timeIncrements * 0.6));
        }, i * timeIncrements);
    }
} 
