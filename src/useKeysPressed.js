import { useState, useEffect } from 'react';

export const useKeysPressed = (targetKeys) => {
    // State for keeping track of whether key is pressed
    const [keysPressed, setKeysPressed] = useState(() => {
      // State is a dictionary of booleans for target keys
      const targetKeyDict = {}
      targetKeys.forEach(targetKey => targetKeyDict[targetKey] = false)
      return targetKeyDict
    });
    // If pressed key is our target key then set to true
    const downHandler = ({ key }) => {
      if (Object.keys(keysPressed).includes(key)) {
        setKeysPressed((currentKeys) => ({...currentKeys, [key]: true}))
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (Object.keys(keysPressed).includes(key)) {
        setKeysPressed((currentKeys) => ({...currentKeys, [key]: false}))
      }
    };
    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []);

    return keysPressed;
  }