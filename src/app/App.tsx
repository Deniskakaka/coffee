import React from "react";
import CoffeeMachineOrder from "../coffeeMachineSeller/CoffeMachineOrder";
import CoffeeOrder from "../coffeOrder/CoffeeOrder";
import { Route, Switch } from 'react-router-dom';

export default function App() {
    return (
        <Switch>
            <Route  path="/order" component={CoffeeOrder}/>
            <Route  path="/" component={CoffeeMachineOrder}/>
        </Switch>
    )
}
