export default function runAnimation(anims, timeIncrements) {
    const arrayBars = document.getElementsByClassName('array-bar');
    
    for (let i = 0; i < anims.length; i++) {
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
