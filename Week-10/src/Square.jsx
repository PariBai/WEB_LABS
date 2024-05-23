import React from 'react';

function Square(props) {
    const { length } = props;
    return (
        <div>
            <h2>Square</h2>
            <p>Length: {length}</p>
        </div>
    );
}

export default Square;
