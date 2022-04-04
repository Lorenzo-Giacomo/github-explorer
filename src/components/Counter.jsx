import { useEffect, useState } from "react";

export function Counter() {
  // desetruturando o array, dividindo em duas variáveis
  const [counter, setCounter] = useState(0);

  function increment() {
    console.log('incrementing')

    setCounter(counter +1)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}