import React from "react";
import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { getLazyLoadContainerFor } from "../../lib/lazyLoading";

export default function AdminModule() {
    const { path } = useRouteMatch();
    const ClientsPages = getLazyLoadContainerFor(() => import('./clients'));
    
    return (
        <Switch>
            <Route path={`${path}/clients`} component={ClientsPages} />
        </Switch>
    )
}