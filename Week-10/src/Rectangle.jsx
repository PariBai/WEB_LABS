import React from 'react';

function Rectangle(props) {
    const { length, width } = props;
    return (
        <div>
            <h2>Rectangle</h2>
            <p>Length: {length}</p>
            <p>Width: {width}</p>
        </div>
    );
}

export default Rectangle;
