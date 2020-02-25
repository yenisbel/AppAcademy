import React from "react";
import { Route, Switch } from "react-router-dom";
import GodsList from "./gods/GodsList";
import GodDetail from "./gods/GodDetail";
import Create from "./create/Create";
import NavBar from "./navbar/NavBar";

const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={GodsList} />
                <Route exact path="/new" component={Create} />
                <Route exact path="/gods/:id" component={GodDetail} />
                {/* <Route exact path="/create" component={GodCreate} /> */}
            </Switch>

        </div>
    );
};

export default App;