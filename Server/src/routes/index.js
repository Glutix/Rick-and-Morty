const express = require("express");
const mainRouter = express.Router();

//!Controllers
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

//!routes
mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);
mainRouter.post("/fav", postFav);
mainRouter.delete("/fav/:id", deleteFav);

module.exports = mainRouter;
