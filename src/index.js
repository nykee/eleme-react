import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import Msite from './page/msite/Msite'
import Discover from './page/discover/Discover'
import Order from './page/order/Order'
import Profile from './page/profile/Profile'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route,  browserHistory,IndexRoute  } from 'react-router';



const routes =
    <Route path={'/'} components={App}>
        <IndexRoute component={Msite} />
        <Route path={'msite'} component={Msite}/>
        <Route path={'discover'} component={Discover}/>
        <Route path={'order'} component={Order}/>
        <Route path={'profile'} component={Profile}/>




    </Route>;

ReactDOM.render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
