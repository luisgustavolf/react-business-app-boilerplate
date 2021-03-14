import React from "react";
import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { lazyModuleFactory } from "../../../lib/lazyModuleFactory";

export default function AdminModule() {
    const { path } = useRouteMatch();
    const ClientsPages = lazyModuleFactory(() => import('./clients'));
    
    return (
        <Switch>
            <Route path={`${path}/clients`} component={ClientsPages} />
        </Switch>
    )
}