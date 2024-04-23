import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setMode(newMode);
    setHistory(prev => [...prev, newMode])
  }
  function back() {
  }

  return { 
    mode,
    transition,
    back,
   };
};
