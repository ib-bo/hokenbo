import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CalculatorContainer from './containers/CalculatorContainer';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CalculatorContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
