import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
/* import { API_KEY } from "../../App";
import { URL_BASE } from "../../App"; */
import style from "./Detail.module.css";

const Detail = () => {
	const { id } = useParams(); //* useParams nos devuelve un objeto, y dentro de ese objeto hay una propiedad id

	//? Estado local
	const [character, setCharacter] = useState({}); //* useState es un array de 2 posiciones. [estado, fn()] la fn es la que me permite modificar el estado

	//? Peticion
	useEffect(() => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
			({ data }) => {
				//* axios me trae un objeto gigante donde guarda la peticion en el propiedad data por eso hacemos destructuring de data
				if (data.name) {
					setCharacter(data);
				} else {
					alert("No hay personajes con ese ID");
				}
			}
		);
		return setCharacter({}); //* Cuando se desmonta el componente setea el estado en VACIO
	}, [id]); //* CUANDO CAMBIE EL ID SE EJECUTA EL AXIOS, (Este array de dependencias es el estado de update)

	return (
		//* Nota: si intento renderizar algo que no existe se rompe todo. por lo tanto hay que comprobar si existe la informacion
		//* Se puede usar varios forma de renderizar un componente de forma condicional
		//* Tenemos las siguientes opciones: operador ternario. o un valor booleano, o condicional chaining
		<div className={style.conteiner}>
			<div className={style.detail}>
				<h1>{character?.name}</h1>
				<h2>{character?.status}</h2>
				<h2>{character?.species}</h2>
				<h2>{character?.gender}</h2>
				<h2>{character?.origin?.name}</h2>
			</div>
			<img
				className={style.image}
				src={character?.image}
				alt={character?.name}
			/>
		</div>
	);
};

export default Detail;
