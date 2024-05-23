import { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
function Counter() {
const [count, setCount] = useState(1);
const [calculation, setCalculation] = useState();
useEffect(() => {
setCalculation(() => count * 2);
}, ); // < add the count variable here
return (
<>
<p>Count: {count}</p>
<button onClick={() => setCount((c) => c + 1)}>+</button>
<p>Calculation: {calculation}</p>
</>
);
}
export default Counter;