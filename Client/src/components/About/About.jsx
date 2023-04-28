import style from "./About.module.css";

const About = () => {
	return (
		<div className={style.container}>
			<div className={style.containerCard}>
				<h1 className={style.title}>Ricardo Ferreyra</h1>
				<img
					className={style.image}
					src={require("../../img/Perfil.jpg")}
					alt="Foto de perfil"
				/>
				<p className={style.parrafo}>
					Hola, soy Ricardo. Actualmente estoy aprendiendo Desarollo web.
					Tambièn me encuentro estudiando ingenieria en sistemas. En general me
					gustan las cosas que tengan relaciòn con la tecnologia En mis pasa
					tiempos me divierto jugando a los videos juegos. mi hobby es tocar la
					guitarra.
				</p>
			</div>

			<div className={style.containerCard}>
				<h1 className={style.title}>Redes social</h1>

				<section className={style.section}>
					<a
						href="https://www.facebook.com/gluti.nose"
						target="_blank"
						rel="noopener noreferrer"
						className={style.link}
					>
						<img
							className={style.icon}
							src={require("../../icons/facebook.png")}
							alt="Facebook"
						/>
						facebook.com/gluti.nose
					</a>
				</section>

				<section className={style.section}>
					<a
						href="https://www.instagram.com/glutinose"
						target="_blank"
						rel="noopener noreferrer"
						className={style.link}
					>
						<img
							className={style.icon}
							src={require("../../icons/instagram.png")}
							alt="Instagram"
						/>
						instagram.com/glutinose
					</a>
				</section>

				<section className={style.section}>
					<a
						href="https://github.com/Glutix"
						target="_blank"
						rel="noopener noreferrer"
						className={style.link}
					>
						<img
							className={style.icon}
							src={require("../../icons/github.png")}
							alt="Github"
						/>
						github.com/Glutix
					</a>
				</section>

				<section className={style.section}>
					<a
						href="https://www.google.com/intl/es-419/gmail/about/"
						target="_blank"
						rel="noopener noreferrer"
						className={style.link}
					>
						<img
							className={style.icon}
							src={require("../../icons/gmail.png")}
							alt="Gmail"
						/>
						ferreyra.ricardo@gmail.com
					</a>
				</section>

				<section className={style.section}>
					<a
						href="https://www.linkedin.com/in/ricardo-ferreyra"
						target="_blank"
						rel="noopener noreferrer"
						className={style.link}
					>
						<img
							className={style.icon}
							src={require("../../icons/linkedin.png")}
							alt="Linkedin"
						/>
						linkedin.com/ricardo-ferreyra
					</a>
				</section>
			</div>
		</div>
	);
};
export default About;
