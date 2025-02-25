const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user)
		return res.status(400).send({ message: "¡Correo o contraseña invalidos!" });

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword)
		return res.status(400).send({ message: "¡Correo o contraseña invalidos!" });

	const token = user.generateAuthToken();
	res.status(200).send({ data: token, message: "Espere un segundo..." });
});

module.exports = router;
