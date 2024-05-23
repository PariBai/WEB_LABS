import React from 'react';
import Circle from './Circle.jsx';
import Square from './Square.jsx';
import Rectangle from './Rectangle.jsx';

function App() {
    return (
        <div>
            <Circle radius={5} />
            <Square length={10} />
            <Rectangle length={8} width={4} />
        </div>
    );
}

export default App;

