import * as React from "react";
import "./index.scss";
import imagesObj from "@/assets/images";
import Image from "@components/Image";
import Button from "@components/Button";
import { IconTypes, getIconNames } from "@/assets/icons";
import { useNavigate } from "react-router-dom";
import { StyleModeContext } from "@/utils/contexts";
import useScreenSize from "@/utils/custom_hooks/useScreenSize";
import { IUrl, useFetch } from "@/utils/custom_hooks";
import { fetchDownloadAPI } from "@/utils/custom_hooks/useFetchDownload";
import Menu from "@/components/Menu";
import Clock from "@/components/Clock";
import Carrousel from "@/components/Carrousel";

export type IPortfolio = {
	id: string;
};

/**
 * Portfolio page
 * @param props Portfolio properties
 * @returns Portfolio component
 */
const Portfolio: React.FC<IPortfolio> = (props: IPortfolio) => {
	const navigate = useNavigate();
	const { styleMode, setStyleMode } = React.useContext(StyleModeContext);
	const { size } = useScreenSize();
	const [url, setUrl] = React.useState<IUrl>(null);
	const { data } = useFetch(url, "test", false);

	const downloadCV = () =>
		fetchDownloadAPI(
			// "http://localhost:3000/get-cv",
			"https://sm-api-adrisantos11.vercel.app/get-cv",
			"Adrián_Santos_2023"
		);

	React.useEffect(() => {
		setUrl({
			url: "https://sm-api-adrisantos11.vercel.app/",
			method: "GET",
		});
	}, []);

	React.useEffect(() => {
		if (data && data.id === "test") {
			const { data: endpointData } = data;
			console.log(endpointData);
		}
	}, [data]);

	React.useEffect(() => {
		console.log("Render portfolio...");
	});

	return (
		<div className="p-portfolio">
			<div className="s-presentation" id="home-section">
				<div className="p-portfolio__background-shadow"></div>
				<div className="p-portfolio__header">
					<span
						className={`icon-${IconTypes["web-logo"]} p-portfolio__web-logo`}
						onClick={() => navigate("/")}
					/>

					<div className="p-portfolio__header-description">
						<div className="p-portfolio__name">
							<span className="p-portfolio__name-text">
								Hi 👋
							</span>
							<span className="p-portfolio__name-text">
								I'm{" "}
								<span className="p-portfolio__name-text p-portfolio__name-text--bold">
									Adrián Santos
								</span>
							</span>
						</div>
						<span className="p-portfolio__profile">
							Software Engineer | Full-stack dev
						</span>
					</div>
					{size.width >= 991 ? (
						<Button id="download-cv" onClick={downloadCV}>
							Download CV
						</Button>
					) : (
						""
					)}
				</div>
				<div className="p-portfolio__clock">
					<Clock id="portfolio-clock" />
				</div>
				<div className="p-portfolio__center-content">
					<div className="p-portfolio__bckg-circle"></div>
					<div className="p-portfolio__slogan">
						<span className="p-portfolio__slogan-text">THINK</span>
						<span className="p-portfolio__slogan-text p-portfolio__slogan-text--bold">
							RIGHT,
						</span>
						<span className="p-portfolio__slogan-text">DO IT</span>
						<span className="p-portfolio__slogan-text p-portfolio__slogan-text--bold">
							BETTER
						</span>
					</div>
					<span
						className={`icon-${IconTypes["bulb-light"]} p-portfolio__bulb`}
					/>
					<Image
						id="portfolio-self-img"
						image={imagesObj["portfolio-self-img"]}
						height={4}
					></Image>
				</div>
				{size.width < 991 ? (
					<Button id="download-cv-mobile" onClick={downloadCV}>
						Download CV
					</Button>
				) : (
					""
				)}
				<div className="p-portfolio__social-container">
					<span
						className={`icon-${IconTypes["linkedin"]} p-portfolio__social-icon p-portfolio__social-icon--linked-in`}
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/adrian-santos-mena-66578712a",
								"_blank"
							)
						}
					></span>
					<span
						className={`icon-${IconTypes["github"]} p-portfolio__social-icon p-portfolio__social-icon--insta`}
						onClick={() =>
							window.open(
								"https://github.com/adrisantos11?tab=repositories",
								"_blank"
							)
						}
					></span>
					<span
						className={`icon-${IconTypes["pinterest"]} p-portfolio__social-icon p-portfolio__social-icon--pinterest`}
						onClick={() =>
							window.open(
								"https://www.pinterest.es/adrisantos11/",
								"_blank"
							)
						}
					></span>
				</div>
			</div>
			<div className="s-about-me" id="about-me-section">
				<h2 className="s-about-me__title">ABOUT ME</h2>

				<div className="s-about-me__list">
					<span className="s-about-me__list-item s-about-me__list-item--selected">
						HARD SKILLS
					</span>
					<span className="s-about-me__list-item">SOFT SKILLS</span>
					<span className="s-about-me__list-item">LANGUAGES</span>
					<span className="s-about-me__list-item">STUDIES</span>
				</div>

				<div className="s-about-me__info">
					<div className="s-about-me__boxes">
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>
							<span className="s-about-me__box-item">
								JAVASCRIPT
							</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>
							<span className="s-about-me__box-item">
								REACTJS
							</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>
							<span className="s-about-me__box-item">
								TYPESCRIPT
							</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>
							<span className="s-about-me__box-item">CSS</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">SASS</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">HTML</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">POO</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">
								GIT / GITHUB
							</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">
								WEBPACK
							</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">JSON</span>
						</div>

						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">JSON</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">JSON</span>
						</div>
						<div className="s-about-me__box">
							<span className="s-about-me__box-decoration-1"></span>
							<span className="s-about-me__box-decoration-2"></span>

							<span className="s-about-me__box-item">JSON</span>
						</div>
					</div>
					<div className="s-about-me__box-types">
						<div className="s-about-me__type">
							<span className="s-about-me__type-tag" />
							<span className="s-about-me__type-text">
								EXPERT
							</span>
						</div>
						<div className="s-about-me__type">
							<span className="s-about-me__type-tag" />
							<span className="s-about-me__type-text">
								EXPERIENCED
							</span>
						</div>
						<div className="s-about-me__type">
							<span className="s-about-me__type-tag" />
							<span className="s-about-me__type-text">
								INTERMEDIATE
							</span>
						</div>
						<div className="s-about-me__type">
							<span className="s-about-me__type-tag" />
							<span className="s-about-me__type-text">
								LEARNING
							</span>
						</div>
					</div>
				</div>
				{/* <Carrousel id="testing"></Carrousel> */}
			</div>
			<div className="s-experience" id="experience-section">
				<span className="s-about-me__title">EXPERIENCE</span>
				<div className="s-about-me__in-dev-text">In development</div>
				<div className="s-about-me__in-dev-text">
					Please, <b>download my CV</b> for further information
				</div>
			</div>
			<div
				className="p-portfolio__style-mode-toogle"
				onClick={() => {
					if (styleMode === "light") setStyleMode("dark");
					else if (styleMode === "dark") setStyleMode("light");
				}}
			>
				<span
					id="dark-mode-icon"
					className={`icon-${
						styleMode === "light"
							? IconTypes["moon"]
							: IconTypes["sun1"]
					} p-portfolio__style-mode-button`}
				/>
			</div>

			<div className="p-portfolio__menu">
				<Menu
					id="portfolio-menu"
					items={[
						{ id: "home-section", text: "HOME" },
						{ id: "about-me-section", text: "ABOUT ME" },
						{ id: "experience-section", text: "EXPERIENCE" },
						{
							id: "personal-projects-item",
							text: "PERSONAL PROJECTS",
							disabled: true,
						},
					]}
					onClick={(id: string, value: string) => {}}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
