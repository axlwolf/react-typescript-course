import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
	(window as any).hello();
	return <div>Hello World mother fuckers!!!</div>;
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
