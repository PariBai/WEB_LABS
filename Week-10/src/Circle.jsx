import React from 'react';

function Circle(props) {
    const { radius } = props;
    return (
        <div>
            <h2>Circle</h2>
            <p>Radius: {radius}</p>
        </div>
    );
}

export default Circle;
