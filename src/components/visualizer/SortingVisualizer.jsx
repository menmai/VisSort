import React, { useState, useEffect } from 'react';
import * as sortingAlgorithms from '../../SortingAlgorithms/sortingAlgorithms.js';
import Navigation from '../Navigation';
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
                mergeSort();
                break;
            default:
                mergeSort();
        }
    };


    function mergeSort() {
        const anims = sortingAlgorithms.mergeSort(sortingArr);
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
                }, i * 5);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnims[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}%`;
                }, i * 5);
            }
        }
        setTimeout(() => {
            setSorting(false);
        }, newAnims.length * 5 + 5);
    };

    return (
        <div>
            <Navigation 
                refresh={generateArray}
                updateState={setSortingState}
                run={handleRun}
                busy={sorting}
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


    /*function quickSort() {};

    function heapSort() {};

    function bubbleSort() {};

    function testSort() {
        const arr = [];
        for(let i = 0; i < 100; i++) {
            for(let i = 0; i < randomInt(100, 1000); i++) {
                arr.push(randomInt(-1000, 100));
            }
            const jsSorted = arr.slice().sort((a, b) => a - b);
            const msSorted = sortingAlgorithms.mergeSort(arr);
        
            console.log(ArraysAreEqual(jsSorted, msSorted));
        }
    }; 
    

    function ArraysAreEqual(arr1, arr2) {
        if(arr1.length !== arr2.length) return false;
            for(let i = 0; i <= arr1.lenth; i++) {
                if(arr1[i] !== arr2[i]) return false;
            }
        return true;
    }

    */

export default SortingVisualizer;
