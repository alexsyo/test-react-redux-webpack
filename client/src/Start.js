import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import style from './sass/main.scss';
import html from './index.html';

// --- Plain JS --- //

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: require('./App.js').default,
            indexRoute: require('./components/Routes/Home/index.js'),
            childRoutes: [
                require('./components/Routes/Stuff/index.js'),
                require('./components/Routes/Friends/index.js'),
                require('./components/Routes/About/index.js'),
                require('./components/Routes/Error/index.js'),
            ]
        }
    ]
};

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute} />
    </Provider>,
   document.getElementById('app')
);



// --- JSX --- //


// render(
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute getComponent={(location, callback) => {
//                 require.ensure([], (require) => {
//                     callback(null, require('./Components/Routes/Home.js').default);
//                 });
//             }} />
//             <Route path="/stuff" getComponent={(location, callback) => {
//                 require.ensure([], (require) => {
//                     callback(null, require('./Components/Routes/Stuff.js').default);
//                 });
//             }} />
//             <Route path="/friends" getComponent={(location, callback) => {
//                 require.ensure([], (require) => {
//                     callback(null, require('./Components/Routes/Friends.js').default);
//                 });
//             }} />
//             <Route path="/about" getComponent={(location, callback) => {
//                 require.ensure([], (require) => {
//                     callback(null, require('./Components/Routes/About.js').default);
//                 });
//             }} />
//             <Route path="*" getComponent={(location, callback) => {
//                 require.ensure([], (require) => {
//                     callback(null, require('./Components/Routes/Home.js').default);
//                 });
//             }} />
//         </Route>
//     </Router>,
//     document.getElementById('app')
// );