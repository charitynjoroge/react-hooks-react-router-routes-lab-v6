import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import DirectorsPage from '../src/pages/Directors';
import ActorsPage from '../src/pages/Actors';
import MoviePage from '../src/pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  <Route key="home" exact path="/" component={HomePage} />,
  <Route key="directors" exact path="/directors" component={DirectorsPage} />,
  <Route key="actors" exact path="/actors" component={ActorsPage} />,
  <Route key="movie" exact path="/movie/:id" component={MoviePage} />,
  <Route key="error" exact path='/error' Component={ErrorPage}/>
];

export default routes;
