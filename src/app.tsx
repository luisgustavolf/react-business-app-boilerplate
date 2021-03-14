import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { Modules } from './modules';

export function App() {
  return (
    <Fragment>
        <HashRouter>
          <Modules />
        </HashRouter>
    </Fragment>
  );
}