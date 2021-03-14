import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { lazyModuleFactory } from '../lib/lazyModuleFactory';

export function Modules() {
    const AdminModulePages = lazyModuleFactory(() => import('./admin/pages'));
    const SharedModulePages = lazyModuleFactory(() => import('./shared/pages'));

    return (
        <HashRouter>
            <Route path={'/admin'} component={AdminModulePages} />
            <Route path={'/'} component={SharedModulePages} />
        </HashRouter>
    )
}