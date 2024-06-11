import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/slices/counter';

function App() {
    const [count, setCount] = useState(0);
    const { counter } = useSelector((state) => state.counter); //es lo mismo que state.counter.counter
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>count is {counter}</button>
            </div>
        </>
    );
}

export default App;
