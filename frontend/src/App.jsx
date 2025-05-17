import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const fetchCounter = async () => {
    const res = await fetch('http://localhost:3001/counter');
    const data = await res.json();
    setCount(data.value);
  };

  const incrementCounter = async () => {
    const res = await fetch('http://localhost:3001/counter/increment', {
      method: 'POST'
    });
    const data = await res.json();
    setCount(data.value);
  };

  const resetCounter = async () => {
    const res = await fetch('http://localhost:3001/counter/reset', {
      method: 'POST'
    });
    const data = await res.json();
    setCount(data.value);
  };

  useEffect(() => {
    fetchCounter();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Compteur : {count}</h1>
      <button className="btn btn-primary me-2" onClick={incrementCounter}>Incrémenter</button>
      <button className="btn btn-danger" onClick={resetCounter}>Réinitialiser</button>
    </div>
  );
}

export default App;
