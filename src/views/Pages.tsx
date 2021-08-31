import React from 'react';
import {Route, Switch} from 'react-router';
import { PageLayout } from './Layout';
import Dashboard from "./Dashboard/Dashboard";
import Details from "./Details/Details";

const Pages = () => {
    return (
        <PageLayout>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/detail/:productId" component={Details}/>
            </Switch>
        </PageLayout>
    )
}

export default Pages;