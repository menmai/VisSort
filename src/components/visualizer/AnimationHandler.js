export default function runAnimation(anims) {
    for (let i = 0; i < anims.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneCompare, barTwoCompare] = anims[i].comparison;
        let barOneStyle = arrayBars[barOneCompare].style;
        let barTwoStyle = arrayBars[barTwoCompare].style;
        setTimeout(() => {
            if(anims[i].swap !== null) {
                const [barOneSwap, barTwoSwap] = anims[i].swap;
                barOneStyle = arrayBars[barOneSwap].style;
                barTwoStyle = arrayBars[barTwoSwap].style;
                const temp = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = temp;
            }
            barOneStyle.backgroundColor = 'red';
            barTwoStyle.backgroundColor = 'red';
            setTimeout(() => {
                barOneStyle.backgroundColor = 'lightblue';
                barTwoStyle.backgroundColor = 'lightblue';
            }, 6);
        }, i * 10);
    }
}
