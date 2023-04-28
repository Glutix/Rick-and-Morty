//! Librerias
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

//! Componentes
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";

//* Api Key Henry
/* export const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
export const API_KEY = "e3652765e5ed.1823c21d55c6f19e8b80"; */

function App() {
	//? Estados
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	//? Routing
	const location = useLocation();
	const navigate = useNavigate();

	const login = async (userData) => {
		try {
			const { email, password } = userData;
			const URL = "http://localhost:3001/rickandmorty/login/";
			const { data } = await axios(
				URL + `?email=${email}&password=${password}`
			);
			const { access } = data;
			setAccess(access);
			access && navigate("/home");
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		!access && navigate("/");
	}, [access, navigate]);

	async function onSearch(id) {
		try {
			const { data } = await axios(
				`http://localhost:3001/rickandmorty/character/${id}`
			);

			const bool = characters.find((char) => char.id === data.id);

			if (data.name && !bool) {
				setCharacters([...characters, data]);
			} else {
				alert("Este personaje ya existe!");
			}
		} catch (error) {
			alert("¡No existe personaje con este ID!");
		}
	}

	const onClose = (id) => {
		const charactersFilter = characters.filter(
			(character) => character.id !== id
		);
		setCharacters(charactersFilter);
	};

	return (
		<div className="App">
			{location.pathname !== "/" && (
				<Nav onSearch={onSearch} setAccess={setAccess} />
			)}

			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/favorites" element={<Favorites onClose={onClose} />} />
			</Routes>
		</div>
	);
}

export default App;
