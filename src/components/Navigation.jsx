import React from 'react';
import AlgoButton from './AlgoButton';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navigation.css';

function Navigation(props) {
    return(
        <div className="nav-bar">
            <DropdownButton id="dropdown-item-button" title="Algorithm" disabled={props.busy}>
                <AlgoButton fn={() => {props.updateState("merge-sort")}} title="Merge Sort" />
                <AlgoButton fn={() => {props.updateState("quick-sort")}} title="Quick Sort" />
                <AlgoButton fn={() => {props.updateState("heap-sort")}} title="Heap Sort" />
                <AlgoButton fn={() => {props.updateState("bubble-sort")}} title="Bubble Sort" />
            </DropdownButton>
            <div>
                <Button variant="primary" onClick={props.refresh} disabled={props.busy}>Reset</Button>{' '}
                <Button variant="secondary" onClick={props.run} disabled={props.busy}>Run</Button>
            </div>
        </div>
    );
}

export default Navigation;