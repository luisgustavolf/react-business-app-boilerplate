import * as React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Navbar } from '../components/environment/navbar';
import { NavbarItem } from '../components/environment/navbar/types';
import { lazyModuleFactory } from '../lib/lazyModuleFactory';

export function Modules() {
    const { push } = useHistory()

    const paths: NavbarItem[] = [
        { path: '/', title: '[Shared] Home' },
        { path: '/login', title: '[Shared] Login' },
        { path: '/resetPassword', title: '[Shared] Reset password' },
        { path: '/admin/clients/search', title: '[Admin] Clients - Search' },
        { path: '/admin/clients/client', title: '[Admin] Clients - Crud' },
    ]

    const AdminModulePages = lazyModuleFactory(() => import('./admin/pages'));
    const SharedModulePages = lazyModuleFactory(() => import('./shared/pages'));

    return (
        <React.Fragment>
            <Navbar items={paths} onNavigate={push} />
            <Switch>
                <Route path={'/admin'} component={AdminModulePages} />
                <Route path={'/'} component={SharedModulePages} />
            </Switch>
        </React.Fragment>
    )
}