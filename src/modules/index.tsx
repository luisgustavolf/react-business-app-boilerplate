import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom'

export interface ModulesProps {
    children?: any
}

export function Modules(props:ModulesProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    const AdminModule = React.lazy(() => import('./admin/pages'));
    const SharedModule = React.lazy(() => import('./shared/pages'));

    return (
        <HashRouter>
            <Route path={'/admin'}>
                <React.Suspense fallback={'...'}>
                    <AdminModule />
                </React.Suspense>
            </Route>

            <Route path={'/'}>
                <React.Suspense fallback={'...'}>
                    <SharedModule />
                </React.Suspense>
            </Route>
        </HashRouter>
    )
}