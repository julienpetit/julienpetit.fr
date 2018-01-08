import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import "typeface-roboto-mono";
import App from './App';
import ReactGA from 'react-ga';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-44733126-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
