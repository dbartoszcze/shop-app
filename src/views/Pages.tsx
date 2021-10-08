import React from 'react';
import {Route, Switch} from 'react-router';
import { PageLayout } from './Layout';
import Dashboard from "./Dashboard/Dashboard";

const Pages = () => {
    return (
        <PageLayout>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
            </Switch>
        </PageLayout>
    )
}

export default Pages;