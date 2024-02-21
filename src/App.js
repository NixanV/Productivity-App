import {Route, Routes} from "react-router-dom";

import {Header} from "./components/common/Header/Header";
import {Home} from "./components/Main/Home";
import {Programs} from "./components/programs/Programs"

function App() {
  	return (
    	<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/programs" element={<Programs />} />
			</Routes>
    	</div>
  	);
}

export default App;
