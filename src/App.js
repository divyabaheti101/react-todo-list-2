
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(5)
  return (
    <>
      <p>Hello World. The value is {value}.</p>
    </>
  );
}

export default App;
