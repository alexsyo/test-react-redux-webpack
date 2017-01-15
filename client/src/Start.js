import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import style from './sass/main.scss';

// Routes
import App from './App.js';
import Home from './Components/Routes/Home.js';
import About from './Components/Routes/About.js';
import Stuff from './Components/Routes/Stuff.js';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/about" component={About} />
            <Route path="*" component={Home} />
        </Route>
    </Router>,
    document.getElementById('app')
);