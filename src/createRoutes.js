import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import * as containers from './containers';
import Homepage from './containers/Home/Homepage';
import Dashboard from './containers/Home/Dashboard';
import QuestionBuilder from './containers/Question/QuestionBuilder';
import QuestionList from './containers/Question/QuestionList';

const {
  NotFoundPage,
} = containers;

const createRoutes = store => ( // eslint-disable-line no-unused-vars
  <Route component={App}>
    <IndexRoute component={Homepage} />
    <Route path="/" component={Homepage} />
    <Route path="/builder" component={QuestionBuilder} />
    <Route path="/qn-list" component={QuestionList} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default createRoutes;
