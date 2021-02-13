import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import IT from "../Screens/IT";
import Development from "../Screens/Development";
import Search from "../Screens/Search";

// Router component
const Router = () => (
    <BrowserRouter>
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={IT}>
                    <Redirect to="/it"/>
                </Route>
                <Route path="/it" component={IT} />
                <Route path="/development" component={Development}/>
                <Route path="/search" component={Search} />
            </Switch>
        </>
    </BrowserRouter>
)

export default Router;