import React from "react";
import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";

export default function AdminModule() {
    let { path } = useRouteMatch();

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    const ClientsModule = React.lazy(() => import('./clients'));

    return (
        <Switch>
            <Route path={`${path}/clients`}>
                <React.Suspense fallback={'...'}>
                    <ClientsModule />
                </React.Suspense>
            </Route>
        </Switch>
    )
}