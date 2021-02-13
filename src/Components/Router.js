import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
// import IT from "../Screens/IT";
// import Development from "../Screens/Development";
// import Search from "../Screens/Search";

// screen components를 lazy하게 가져오기
const IT = lazy(() => import("../Screens/IT"));
const Development = lazy(() => import("../Screens/Development"));
const Search = lazy(() => import("../Screens/Search"));

// Router component
const Router = () => (
    <BrowserRouter>
        <>
            <Header/>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={IT}/>
                    <Route path="/development" component={Development}/>
                    <Route path="/search" component={Search} />
                </Switch>
            </Suspense>
        </>
    </BrowserRouter>
)

export default Router;