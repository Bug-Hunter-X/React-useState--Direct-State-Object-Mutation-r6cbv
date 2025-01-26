```javascript
//Incorrect usage of useState hook
import React, { useState } from 'react';

function MyComponent() {
  // Incorrect: assigning an object directly
  const [state, setState] = useState({ count: 0, name: 'Guest' });

  const incrementCount = () => {
    // Incorrect: This mutates the state object directly
    state.count++;
    setState(state);
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```