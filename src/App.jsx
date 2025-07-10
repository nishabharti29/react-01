import React from 'react';
import Greeting from './Greeting.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome to My App</h1>
            <Greeting />
            <Greeting />
            <p>This shows component composition.</p>
        </div>
    );
}

export default App;