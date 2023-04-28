const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
	id: 923,
	name: "pepito",
	species: "Human",
	gender: "Unknown",
	status: "Alive",
	origin: {
		name: "Earth (C-137)",
	},
	image: "image.jpg",
};

describe("test de RUTAS", () => {
	describe("GET /rickandmorty/character/:id", () => {
		it("Responde con status 200", async () => {
			const response = await request.get("/rickandmorty/character/1");
			expect(response.statusCode).toBe(200);
		});

		it("Responde un objeto con las propiedades: `id`, `name`, `species`, `gender`, `status`, `origin` e `image`", async () => {
			const response = await request.get("/rickandmorty/character/1");
			for (const prop in character) {
				expect(response.body).toHaveProperty(prop);
			}
		});

		it("Si hay un error responde con un status: 500", async () => {
			const response = await request.get("/rickandmorty/character/65164t");
			expect(response.statusCode).toBe(500);
		});
	});
	describe("GET /rickandmorty/login", () => {
		it("Responde con un objeto con la propiedad access en true si la información del usuario es valida", async () => {
			const response = await request.get(
				"/rickandmorty/login?email=ferreyra.gluti@gmail.com&password=asdasd123"
			);
			const access = { access: true };
			expect(response.body).toEqual(access);
		});

		it("Responde con un objeto con la propiedad access en false si la información del usuario es invalida", async () => {
			const response = await request.get(
				"/rickandmorty/login?email=ferreyra.gluti@gmail.com&password=asdghj123"
			);
			const access = { access: false };
			expect(response.body).toEqual(access);
		});
	});

	describe("POST /rickandmorty/fav", () => {
		it("Debe guardar el personaje en favoritos", async () => {
			const response = await request.post("/rickandmorty/fav").send(character);
			/* console.log(response.body); */
			expect(response.body).toContainEqual(character);
		});

		it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
			character.id = 1923;
			character.name = "asdsadsa";
			const response = await request.post("/rickandmorty/fav").send(character);
			expect(response.body.length).toBe(2);
		});
	});

	describe("DELETE /rickandmorty/fav/:id", () => {
		it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
			const response = await request.delete("/rickandmorty/fav/2asd");
			expect(response.body.length).toBe(undefined);
		});

		it("Si el ID enviado existe, deberia eliminarlo de favoritos", async () => {
			const response = await request.delete("/rickandmorty/fav/1923");
			expect(response.body.length).toBe(1);
		});
	});
});
