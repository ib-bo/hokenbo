import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bo from './containers/index';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Bo />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
