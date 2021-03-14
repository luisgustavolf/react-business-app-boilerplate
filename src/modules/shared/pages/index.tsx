import { Route, Switch } from "react-router";
import { HomePage } from "./home";
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
            <Route path={`/`} component={HomePage}/>
        </Switch>
    )
}