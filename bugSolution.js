```javascript
//Correct usage of useState hook
import React, { useState } from 'react';

function MyComponent() {
  const [state, setState] = useState({ count: 0, name: 'Guest' });

  const incrementCount = () => {
    // Correct: create a new object to update the state
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
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