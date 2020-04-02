import React, { useState, useEffect } from 'react';
import mergeSort from '../../sortingAlgorithms/mergeSort.js';
import quickSort from '../../sortingAlgorithms/quickSort.js';
import runAnimation from './AnimationHandler.js';
import Navigation from '../nav/Navigation';
import './SortingVisualizer.css';

function SortingVisualizer() {

    const [sortingArr, setSortingArr] = useState([]);
    const [sortingState, setSortingState] = useState("merge-sort");
    const [sorting, setSorting] = useState(false);

    useEffect(() => {
        if (sorting) runSort();
    });

    function handleRun() { setSorting(true); };

    function generateArray() {
        const arr = [];
        for(let i = 0; i < 200; i++) {
            arr.push(randomInt(3, 98));
        }
        setSortingArr(arr);
    };

    function runSort() {
        switch(sortingState) {
            case "merge-sort":
                runMergeSort();
                break;
            case "quick-sort":
                runQuickSort();
                break;
            default:
                runMergeSort();
        }
    };

    function startResetTimer(anims, timeIncrements){
        setTimeout(() => {
            setSorting(false);
        }, anims.length * timeIncrements + 600);
    }

    function runMergeSort() {
        const animSpeed = 6;
        const anims = mergeSort(sortingArr);
        const newAnims = [];
        for (const anim of anims) {
            newAnims.push(anim.comparison);
            newAnims.push(anim.comparison);
            newAnims.push(anim.swap);
        }
        for (let i = 0; i < newAnims.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = newAnims[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'lightblue';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnims[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}%`;
                }, i * animSpeed);
            }
        }
        startResetTimer(newAnims, animSpeed);
    };

    function runQuickSort() {
        const animSpeed = 10;
        const anims = quickSort(sortingArr, 0, sortingArr.length - 1);

        runAnimation(anims, animSpeed);
        startResetTimer(anims, animSpeed);
    }

    return (
        <div>
            <Navigation 
                refresh={generateArray}
                updateState={setSortingState}
                busy={sorting}
                run={handleRun}
            />
            <div className="main-nav">
            <h1>Selected Algorithm: {sortingState}</h1>
                <div className="array-container">
                    {sortingArr.map((value, idx) => (
                        <div className="array-bar" 
                            key={idx}
                            style={{height: `${value}%`}}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min)
} 


    /*function runHeapSort() {};

    function runBubbleSort() {};*/

export default SortingVisualizer;
