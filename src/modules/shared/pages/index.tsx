import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { LoginPage } from "./login";
import { ResetPasswordPage } from "./resetPassword";

export default function () {
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Switch>
            <Route path={`/login`} component={LoginPage}/>
            <Route path={`/resetPassword`} component={ResetPasswordPage}/>
        </Switch>
    )
}