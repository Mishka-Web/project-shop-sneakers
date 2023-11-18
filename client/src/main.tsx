import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/index.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { cfg } from './config/config.js';

console.log(cfg.apiUrl);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Router>
		<App />
	</Router>
);
