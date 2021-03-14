import * as React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Navbar } from '../components/environment/navbar';
import { getLazyLoadContainerFor } from '../lib/lazyLoading';
import { mainMenu } from './menu';

export function Modules() {
    const { push } = useHistory()
    
    const AdminModulePages = getLazyLoadContainerFor(() => import('./admin/pages'));
    const SharedModulePages = getLazyLoadContainerFor(() => import('./shared/pages'));

    return (
        <React.Fragment>
            <Navbar items={mainMenu} onNavigate={push} />
            <Switch>
                <Route path={'/admin'} component={AdminModulePages} />
                <Route path={'/'} component={SharedModulePages} />
            </Switch>
        </React.Fragment>
    )
}