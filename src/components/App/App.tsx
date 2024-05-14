import React, { FC } from 'react';
import { ColorSchemeSwitcher } from '../ColorSchemeSwitcher/ColorSchemeSwitcher';
import './App.css';

const App: FC = () => {
    return (
        <>
            <div className="page">
                <h1 className="title">Hello webpack</h1>
                <ColorSchemeSwitcher />
            </div>
        </>
    );
};

export default App;
