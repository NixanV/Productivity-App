import {Route, Routes} from "react-router-dom";

import {Header} from "./components/common/Header/Header";
import {Home} from "./components/Main/Home";

function App() {
  	return (
    	<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
    	</div>
  	);
}

export default App;
