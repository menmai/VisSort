import React, { useState, useEffect } from 'react';
import mergeSort from '../../sortingAlgorithms/mergeSort.js';
import quickSort from '../../sortingAlgorithms/quickSort.js';
import heapSort from '../../sortingAlgorithms/heapSort.js';
import bubbleSort from '../../sortingAlgorithms/bubbleSort.js';
import runAnimation from './AnimationHandler.js';
import Navigation from '../nav/Navigation';
import './SortingVisualizer.css';

function SortingVisualizer() {

    const [sorting, setSorting] = useState(false);
    const [sortingArr, setSortingArr] = useState([]);
    const [sortingState, setSortingState] = useState("merge-sort");

    useEffect(() => {
        if (sorting) runSort();  
    });

    useEffect(() => {
        generateArray();
    }, []);

    function handleRun() { 
        setSorting(true);
    };

    function generateArray() {
        const arr = [];
        for(let i = 0; i < 200; i++) {
            arr.push(randomInt(3, 98));
        }
        setSortingArr(arr);
    };

    function runSort() {
        if(sortingState == "merge-sort")
            runMergeSort();
        else if(sortingState == "quick-sort")
            runQuickSort();
        else if(sortingState == "heap-sort")
            runHeapSort();
        else if(sortingState == "bubble-sort")
            runBubbleSort();
    };

    function startResetTimer(anims, timeIncrements){
        setTimeout(() => {
            setSorting(false);
        }, anims.length * timeIncrements + 600);
    }

    function runMergeSort() {
        const animSpeed = 6;
        console.log(sortingArr);
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
        const animSpeed = 18;
        const anims = quickSort(sortingArr, 0, sortingArr.length - 1);
        runAnimation(anims, animSpeed);
        startResetTimer(anims, animSpeed);
    }

    function runHeapSort() {
        const animSpeed = 18;
        const anims = heapSort(sortingArr);
        runAnimation(anims, animSpeed);
        startResetTimer(anims, animSpeed);
    }

    function runBubbleSort() {
        const animSpeed = 2;
        const anims = bubbleSort(sortingArr);
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

export default SortingVisualizer;
