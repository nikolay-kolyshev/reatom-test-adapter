import React from 'react';
import {context} from "@reatom/react-v1";
import {createStore} from "@reatom/core-v1";
import {ClientContext} from "./components/ClientContext";
import {Theme} from "./components/Theme";

const store = createStore();

const App = () => {

    return (
        <div className="App" style={{background: 'green'}}>
            <context.Provider value={store}>
                <Theme/>
                <br/>
                <hr/>
                <ClientContext />
            </context.Provider>
        </div>
    )
}

export default App;
