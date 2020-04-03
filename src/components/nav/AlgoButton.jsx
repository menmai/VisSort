import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Component for select algorithm dropdown items

function AlgoButton(props) {
    return(
        <Dropdown.Item as="button" onClick={props.fn}>{props.title}</Dropdown.Item>
    );
}

export default AlgoButton;