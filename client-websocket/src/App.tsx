import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    // 1. Получение первого значения по REST
    fetch('http://localhost:4000/counter')
      .then((res) => res.json())
      .then((data) => setCounter(data.counter));

    // 2. Подключение к WebSocket
    const socket = new WebSocket('ws://localhost:4000');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.counter !== undefined) {
        setCounter(data.counter);
      }
    };

    return () => socket.close();
  }, []);

  return (
    <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '3rem' }}>
      Counter: {counter}
    </div>
  );
}

export default App;
