let myFavorites = [];

const postFav = (req, res) => {
	try {
		const character = req.body;
		const characterFound = myFavorites.find((fav) => fav.id === character.id);

		if (characterFound) throw Error("Ya existe este personaje");

		myFavorites.push(character);
		return res.status(201).json(myFavorites);
	} catch (error) {
		return res.status(404).send(error.message);
	}
};

const deleteFav = (req, res) => {
	const strId = req.params; //!ESTE PARAMETRO SIEMPRE VIENE COMO STRING
	const id = parseInt(strId.id, 10);

	//* Guardo el indice del elemento en myFavorites que coincida con el id
	const index = myFavorites.findIndex((item) => item.id === id);

	if (index === -1) {
		return res.status(404).json({ error: "Favorite not found" });
	}

	myFavorites.splice(index, 1);

	return res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
