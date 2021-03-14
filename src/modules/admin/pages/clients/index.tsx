import * as React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { ClientPage } from './client';
import { ClientSearchPage } from './search';

export default function () {
    let { path } = useRouteMatch();
    
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Switch>
            <Route path={`${path}/search`} component={ClientSearchPage} />
            <Route path={`${path}/client/:clientUUid?`} component={ClientPage} />
        </Switch>
    )
}