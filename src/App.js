import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [inputReset, setInputReset] = useState(false);

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => (result?result:0) + Number(inputRef.current.value));
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => (result?result:0)  - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => (result?result:0)  * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const divisor = Number(inputRef.current.value);
    
    if (divisor !== 0) {
      setResult((result) => (result ? result : 0) / divisor);
    } 
    else if (inputRef.current.value !== "0") {
      // do nothing if we have an empty field
    }
    else {
      alert("Division by zero is not allowed.");
    }
  };
 
  function resetInput(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    setInputReset(!inputReset);
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
  	setResult(null);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form>
          {result !== null? <p>{result}</p>:null} 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
