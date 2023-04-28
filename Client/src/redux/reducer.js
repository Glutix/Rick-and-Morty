import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./type";

const initialState = {
	myFavorites: [],
	allCharactersFav: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				...state,
				myFavorites: payload,
				allCharactersFav: payload,
			};

		case REMOVE_FAV:
			return {
				...state,
				myFavorites: payload,
				allCharactersFav: payload,
			};

		case FILTER:
			return {
				...state,
				myFavorites:
					payload === "allCharacters"
						? [...state.allCharactersFav]
						: state.allCharactersFav.filter((char) => char.gender === payload),
			};

		case ORDER:
			const listOrder =
				payload === "Ascendente"
					? [...state.myFavorites].sort((a, b) => a.id - b.id)
					: [...state.myFavorites].sort((a, b) => b.id - a.id);
			return {
				...state,
				myFavorites: [...listOrder],
			};

		default:
			return state;
	}
};

export default rootReducer;
