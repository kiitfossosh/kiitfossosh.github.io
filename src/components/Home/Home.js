import React from "react"
import styled from "styled-components"

import home_working_img from "../../images/home_working.svg"
import home_waves_svg from "../../images/home_waves.svg"

const HomeContainer = styled.div`
	background-color: #14213d;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 5rem 0rem 5rem 3rem;
	margin-top: 3rem;

	@media screen and (max-width: 600px) {
		padding: 5rem 0rem 5rem 0rem;
		margin: 0rem;
		justify-content: center;
	}
`

const TextContainer = styled.div`
	font-family: "Rubik", sans-serif;
	padding: 2rem;
	color: white;
`

const HomeTitle = styled.h1`
	font-weight: 700;
	font-size: 3.6rem;
`

const HomeSubtitle = styled.h3`
	font-weight: 300;
	margin-bottom: 6rem;
`

const JoinUsLink = styled.h4`
	font-weight: 400;
	margin-top: 1rem;

	a {
		text-decoration: none;
		color: white;
	}
`

const ImageContainer = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: space-around;
	width: 60%;
	
	img {
		width: 70%;
	}

	@media screen and (max-width: 1300px){
		width: 50%;

		img {
			width: 80%
		}
	}

	@media screen and (max-width: 900px) {
		padding: 0rem;
		width: 80%;

		img {
			width: 80%;
		}
	}
`

const Home = () => {
	return (
		<div id="home">
			<HomeContainer>
				<TextContainer>
					<HomeTitle>KIIT FOSS/OSH</HomeTitle>
					<HomeSubtitle>
						KIIT's Open Source Software <br></br> and Hardware
						Community
					</HomeSubtitle>

					<JoinUsLink>
						<i
							className="fab fa-telegram"
							style={{ marginRight: "0.5rem" }}
						></i>
						<a
							href="https://telegram.me/joinchat/GaeOBkkUOssqrpiHoYSMvw"
							target="_blank"
							rel="noopener noreferrer"
						>
							Join our Telegram Group
						</a>
					</JoinUsLink>

					<JoinUsLink>
						<i
							className="fab fa-github"
							style={{ marginRight: "0.5rem" }}
						></i>
						<a
							href="https://github.com/kiitfossosh"
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/kiitfossosh
						</a>
					</JoinUsLink>
					<br></br>
					<br></br>
				</TextContainer>

				<ImageContainer>
					<img src={home_working_img}></img>
				</ImageContainer>
			</HomeContainer>

			<img style={{ position: 'relative', top: '-1px' }} src={home_waves_svg}></img>
		</div>
	)
}

export default Home
