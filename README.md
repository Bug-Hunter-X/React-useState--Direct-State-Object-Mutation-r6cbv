# React useState: Direct State Object Mutation

This repository demonstrates a common error when using the `useState` hook in React: directly mutating the state object.  Directly modifying the state object leads to the UI not updating correctly, as React's change detection mechanism relies on immutability.

## Bug
The file `bug.js` contains the erroneous code that directly manipulates the state object.  This results in the UI not reflecting the changes to the `count` value.

## Solution
The `bugSolution.js` file illustrates the correct approach.  Instead of directly altering the state object, it creates a new object with the updated values, ensuring React correctly detects the change and updates the UI.