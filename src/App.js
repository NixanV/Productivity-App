import {Route, Routes} from "react-router-dom";

import {Header} from "./components/common/Header/Header";
import {Home} from "./components/Main/Home";
import {Programs} from "./components/programs/Programs"
import { Login } from "./components/Login/Login";

function App() {
  	return (
    	<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/programs" element={<Programs />} />
				<Route path="/login" element={<Login />} />
			</Routes>
    	</div>
  	);
}

export default App;
