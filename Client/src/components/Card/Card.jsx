import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
	id,
	name,
	status,
	species,
	gender,
	image,
	onClose,
	removeFav,
	addFav,
	myFavorites,
}) => {
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites, id]);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFav(id);
		} else {
			setIsFav(true);
			addFav({ id, name, status, species, gender, image });
		}
	};

	return (
		<div className={`${style.card}`}>
			<div className={style.btnConteiner}>
				<button className={style.like} onClick={handleFavorite}>
					{isFav ? "❤️" : "🤍"}
				</button>
				{onClose && (
					<button className={style.button} onClick={() => onClose(id)}>
						×
					</button>
				)}
			</div>

			<NavLink className={style.cardName} to={`/detail/${id}`}>
				{name}
			</NavLink>
			<h2 className={style.detalles}>Status: {status}</h2>
			<h2 className={style.detalles}>Species: {species}</h2>
			<h2 className={style.detalles}>Gender: {gender}</h2>
			<img className={style.img} src={image} alt={name} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (character) => dispatch(addFav(character)),
		removeFav: (id) => dispatch(removeFav(id)),
	};
};

const mapStateToProps = (state) => {
	return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
