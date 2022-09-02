import './App.scss';
import copy from './copy.png';
import React, { useState } from 'react'

function randomNum(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function App() {
    const handleClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (minimum > maximum) {
            setRandomValue("Min is Greater than Max");
            return;
        } 
        setRandomValue(randomNum(minimum, maximum))
    }
    const copyToClipBoard = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        navigator.clipboard.writeText(randomValue.toString())
    }
    const [minimum, setMinimum] = useState<number>(1)
    const [maximum, setMaximum] = useState<number>(9)
    const [randomValue, setRandomValue] = useState<number | string>("")

    return (
        <div className="App">
            <header className="App-header">
                <p>RANDOM&nbsp;NUMBER GENERATOR</p>
            </header>
            <main className='App-main'>
                <section>
                    <div className="generated-number">
                        <input type="text" name="generated-number-field" id="generated-number-field" className='generated-number-field' readOnly value={randomValue}/>
                        <button className='copy-btn' id='copy-btn' onClick={copyToClipBoard}>
                            <img src={copy} width="50" height="50" className='copy-btn-icon'/>
                        </button>
                    </div>
                </section>
                <p>
                    <span>
                        Configuration
                    </span>
                </p>
                <section className="configuration">
                    <div className="minimum-value-Config">
                        <p>Minimum</p>
                        <input type="text" name="minimum-value-config-field" id="minimum-value-config-field" className='minimum-value-config-field' value={minimum} onChange={(e) => setMinimum(parseInt(e.target.value))}/>
                    </div>
                    <div className="maximum-value-Config">
                        <p>Maximum</p>
                        <input type="text" name="maximum-value-config-field" id="maximum-value-config-field" className='maximum-value-config-field' value={maximum} onChange={(e) => setMaximum(parseInt(e.target.value))}/>
                    </div>
                </section>
                <section className='button-section'>
                    <button onClick={handleClick}>Generate</button>
                </section>
            </main>
        </div>
    );
}

export default App;
