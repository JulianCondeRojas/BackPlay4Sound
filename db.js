const mongoose = require("mongoose");

module.exports = async () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		await mongoose.connect("mongodb+srv://administrador:admin1234@play4sound.7n2jbtb.mongodb.net/", connectionParams);
		console.log("Conexión a la base de datos exitosa.");
	} catch (error) {
		console.log("No se ha podido conectar la base de datos.", error);
	}
};
