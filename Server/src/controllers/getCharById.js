const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
	const { id } = req.params;

	try {
		const { data } = await axios(`${URL}${id}`);
		const character = {
			id: data.id,
			status: data.status,
			name: data.name,
			species: data.species,
			origin: data.origin,
			image: data.image,
			gender: data.gender,
		};
		return res.status(200).json(character);
	} catch (error) {
		if (error.response.status === 404) {
			return res.status(404).send(`ID:${id} Not found`);
		}

		if (error.response.status >= 500) {
			return res.status(500).send(error.message);
		}
	}
};

module.exports = getCharById;
