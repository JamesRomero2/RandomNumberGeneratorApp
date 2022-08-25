import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>RANDOM NUMBER GENERATOR</p>
            </header>
            <main className='App-main'>
                <section>
                    <div className="generated-number">
                        <input type="text" name="generated-number-field" id="generated-number-field" className='generated-number-field'/>
                        <button className='copy-btn' id='copy-btn'></button>
                    </div>
                </section>
                <p>Configuration</p>
                <section className="configuration">
                    <div className="length-Config">
                        <p>Length</p>
                        <input type="text" name="length-config-field" id="length-config-field" className='length-config-field'/>
                    </div>
                    <div className="minimum-value-Config">
                        <p>Minimum</p>
                        <input type="text" name="minimum-value-config-field" id="minimum-value-config-field" className='minimum-value-config-field'/>
                    </div>
                    <div className="maximum-value-Config">
                        <p>Maximum</p>
                        <input type="text" name="maximum-value-config-field" id="maximum-value-config-field" className='maximum-value-config-field'/>
                    </div>
                </section>
                <section className='button-section'>
                    <button>Generate</button>
                </section>
            </main>
        </div>
    );
}

export default App;
