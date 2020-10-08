import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button className="big-button" disabled={props.visible} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}

export default Action;