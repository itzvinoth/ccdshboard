import React from "react";
import { Route, Switch } from 'react-router-dom';

import Dashboard from "./Dashboard";
import LayoutPage from "./LayoutPage";

const Main = () => (
	<Switch>
		<Route exact path="/" component={LayoutPage}></Route>
	</Switch>
);

export default Main