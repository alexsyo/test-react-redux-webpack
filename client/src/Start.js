import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import style from './sass/main.scss';

// --- Plain JS --- //

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: require('./App.js').default,
            indexRoute: require('./Components/Routes/Home/index.js'),
            childRoutes: [
                require('./Components/Routes/Stuff/index.js'),
                require('./Components/Routes/Friends/index.js'),
                require('./Components/Routes/About/index.js'),
                require('./Components/Routes/Error/index.js'),
            ]
        }
    ]
};

render(
  <Router history={hashHistory} routes={rootRoute} />, document.getElementById('app')
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