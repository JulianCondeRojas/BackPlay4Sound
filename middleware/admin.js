const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.header("x-auth-token");
	if (!token) return res.status(400).send("Acceso denegado. No hay token.");

	jwt.verify(token, process.env.JWTPRIVATEKEY, (err, validToken) => {
		if (err) {
			return res.status(400).send({ message: "Token invalido" });
		} else {
			if (!validToken.isAdmin)
				return res
					.status(403)
					.send({ message: "No tienes acceso para ver este contenido" });

			req.user = validToken;
			next();
		}
	});
};
