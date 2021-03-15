import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { Pages } from './pages';

export function App() {
  return (
    <Fragment>
        <HashRouter>
          <Pages />
        </HashRouter>
    </Fragment>
  );
}