import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import SignIn from './components/SignIn';
import Blog from './components/Blog';
import SignUp from './components/SignUp';


export default () => (
    <Layout>
        <Route exact path='/api/values' component={Blog} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
       
  </Layout>
);
