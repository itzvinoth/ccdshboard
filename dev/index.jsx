import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const app = document.getElementById('container');
console.log("testing");
setTimeout(function(){
	console.log("after delay");
	ReactDOM.render(<App/>,app);
}, 5000)