import React from 'react';
import { Provider } from "react-redux";
import { store } from './app/store';
import Root from './Components/Root';

export default function App() {

    return (
        <Provider store={store} >
            <Root/>
        </Provider>
    );
    
}

