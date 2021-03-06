import React from "react"
import styled from "styled-components"

import contributors_bg_img from "../../images/contributors_bg.svg"

import anant_iyer from "../../images/profile/anant_iyer.webp"
import megdut_mandal from "../../images/profile/megdut_mandal.webp"
import neelanjan_manna from "../../images/profile/neelanjan_manna.webp"
import rajesh_kumbharkar from "../../images/profile/rajesh_kumbharkar.webp"
import rishi_shukla from "../../images/profile/rishi_shukla.webp"

const ContributorsContainer = styled.div`
	background-image: url(${contributors_bg_img});
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (max-width: 600px) {
		background-size: cover;
	}
`

const HeadText = styled.h1`
	font-family: "Rubik", sans-serif;
	font-weight: 700;
	font-size: 3.6rem;
	text-align: center;
	padding: 3rem;
	padding-bottom: 1rem;

	@media screen and (max-width: 600px) {
		font-size: 2.3rem;
	}
`

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	padding: 4rem 8rem 4rem 8rem;

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 2rem;
	}
`
const CardContainerDevs = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: auto;
	padding: 4rem 8rem 4rem 8rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 2rem;
	}
`
const Card = styled.div`
	background: #fff;
	border-radius: 10px;
	display: inline-block;
	margin: 1rem;
	position: relative;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	padding: 0rem 0rem 1rem 0rem;

	.name {
		font-family: "Rubik", sans-serif;
		text-align: center;
		font-size: 1.8rem;
	}

	a {
		text-decoration: none;
		color: black;
	}

	i {
		font-size: 2rem;
		margin: 1rem 1rem 1rem 1rem;
	}
`

const CardDev = styled.div`
	background: #fff;
	border-radius: 10px;
	display: inline-block;
	margin: 1rem;
	position: relative;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	padding: 1.6rem;

	.name {
		font-family: "Rubik", sans-serif;
		text-align: center;
		font-size: 1.6rem;
	}

	a {
		text-decoration: none;
		color: black;
	}

	i {
		font-size: 1.6rem;
		margin: 1rem 1rem 1rem 1rem;
	}
`

const ProfilePicContainer = styled.div`
	display: flex;
	justify-content: space-around;
`

const ProfilePic = styled.img`
	border-radius: 50%;
	width: 80%;
	padding: 2rem;
`

const Contributors = () => {
	return (
		<div id="contributors">
			<ContributorsContainer>
				<HeadText>Core Team Members</HeadText>

				<hr
					align="center"
					style={{
						height: "3px",
						backgroundColor: "#FCA311",
						border: "none",
						width: "30%",
					}}
				></hr>

				<CardContainer>
					<Card>
						<ProfilePicContainer>
							<ProfilePic
								src={anant_iyer}
								loading="lazy"
							></ProfilePic>
						</ProfilePicContainer>

						<h3 className="name">Anant Kumar Iyer</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/CobbleDesigns" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							<a href="https://www.linkedin.com/in/anant-iyer-1004a3175/" target="_blank">
								<i className="fab fa-linkedin"></i>
							</a>

							{/* <a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</Card>

					<Card>
						<ProfilePicContainer>
							<ProfilePic
								src={rajesh_kumbharkar}
								loading="lazy"
							></ProfilePic>
						</ProfilePicContainer>

						<h3 className="name">Rajesh Kumbhakar</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/Rajssss" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							<a href="https://www.linkedin.com/in/rajesh-kumbhakar-28873b154/" target="_blank">
								<i className="fab fa-linkedin"></i>
							</a>

							{/* <a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</Card>

					<Card>
						<ProfilePicContainer>
							<ProfilePic
								src={megdut_mandal}
								loading="lazy"
							></ProfilePic>
						</ProfilePicContainer>

						<h3 className="name">Meghdut Mandal</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/Meghdut-Mandal" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							<a href="https://www.linkedin.com/in/meghdut-mandal-aa2625185/" target="_blank">
								<i className="fab fa-linkedin"></i>
							</a>

							{/* <a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</Card>

					<Card>
						<ProfilePicContainer>
							<ProfilePic
								src={rishi_shukla}
								loading="lazy"
							></ProfilePic>
						</ProfilePicContainer>

						<h3 className="name">Rishi Shukla</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/lightvortex" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							{/* <a href="#">
								<i className="fab fa-linkedin"></i>
							</a>

							<a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</Card>

					<Card>
						<ProfilePicContainer>
							<ProfilePic
								src={neelanjan_manna}
								loading="lazy"
							></ProfilePic>
						</ProfilePicContainer>

						<h3 className="name">Neelanjan Manna</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/neelanjan00" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							<a href="https://linkedin.com/in/neelanjan00" target="_blank">
								<i className="fab fa-linkedin"></i>
							</a>

							{/* <a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</Card>
				</CardContainer>

				<HeadText>Developers</HeadText>

				<hr
					align="center"
					style={{
						height: "3px",
						backgroundColor: "#FCA311",
						border: "none",
						width: "30%",
					}}
				></hr>

				<CardContainerDevs>
					<CardDev>
						<h3 className="name">Junaid H Rahim</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://www.github.com/junaidrahim" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							<a href="https://www.linkedin.com/in/junaidrahim" target="_blank">
								<i className="fab fa-linkedin"></i>
							</a>

							<a href="https://junaidrahim.github.io" target="_blank">
								<i className="far fa-window-maximize"></i>
							</a>
						</div>
					</CardDev>

					<CardDev>
						<h3 className="name">Pratyush Khuntia</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/Hero9868" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							{/* <a href="#">
								<i className="fab fa-linkedin"></i>
							</a>

							<a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</CardDev>

					<CardDev>
						<h3 className="name">Rayak Sil</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://github.com/rayak-sil" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							{/* <a href="#">
								<i className="fab fa-linkedin"></i>
							</a>

							<a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</CardDev>

					<CardDev>
						<h3 className="name">Shubhadip Adhikary</h3>

						<div style={{ textAlign: "center" }}>
							<a href="https://www.github.com/subhadip007" target="_blank">
								<i className="fab fa-github"></i>
							</a>

							{/* <a href="#">
								<i className="fab fa-linkedin"></i>
							</a>

							<a href="#">
								<i className="far fa-window-maximize"></i>
							</a> */}
						</div>
					</CardDev>
				</CardContainerDevs>
			</ContributorsContainer>
		</div>
	)
}

export default Contributors
