import "./App.css";
import HomePage from "./Pages/HomePage";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Games from "./Pages/Games";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/games" element={<Games />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
