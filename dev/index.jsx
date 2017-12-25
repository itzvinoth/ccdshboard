import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";

const app = document.getElementById('container');
console.log("testing");
setTimeout(function(){
	console.log("after delay");
	ReactDOM.render(
	    <BrowserRouter>
		    <App/>
	    </BrowserRouter>
	,app);
}, 5000)