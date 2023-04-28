const users = require("../utils/users");
const ACCESS_KEY = "access";

const login = (req, res) => {
	const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

	const user = users.find(
		(user) => user.email === email && user.password === password
	);

	const access = user ? true : false;

	return res.status(200).json({ [ACCESS_KEY]: access });
};

module.exports = login;
