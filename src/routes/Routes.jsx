import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Condition from '../pages/Condition'
import Contact from '../pages/Contact'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/condition' component={Condition}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    )
}

export default Routes
