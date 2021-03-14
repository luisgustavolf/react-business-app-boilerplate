import { Route, Switch } from "react-router";
import { LoginPage } from "./login";
import { ResetPasswordPage } from "./resetPassword";

export default function SharedModule() {
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