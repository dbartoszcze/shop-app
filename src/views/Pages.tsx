import React from 'react';
import {Route, Switch} from 'react-router';
import { PageLayout } from './Layout';
import Dashboard from "./Dashboard/Dashboard";
import Details from "./Details/Details";
import Basket from "./Basket/Basket";

const Pages = () => {
    return (
        <PageLayout>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/detail" component={Details}/>
                <Route exact path="/basket" component={Basket}/>
            </Switch>
        </PageLayout>
    )
}

export default Pages;