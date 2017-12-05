import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import Msite from './page/msite/Msite'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route,  browserHistory,IndexRoute  } from 'react-router';



const routes =
    <Route path={'/'} components={App}>
        <IndexRoute component={Msite} />
        <Route path={'msite'} component={Msite}/>




    </Route>;

ReactDOM.render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
