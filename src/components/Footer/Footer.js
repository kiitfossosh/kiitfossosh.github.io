import React from "react"
import styled from "styled-components"

import footer_waves_svg from "../../images/footer_waves.svg"

const FooterContainer = styled.div`
	font-family: "Rubik", sans-serif;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	background-color: #14213d;
`

const TextContainer = styled.div`
	color: white;
	background-color: #14213d;
	font-family: "Rubik", sans-serif;
	margin: 0rem;
	padding: 0rem 2rem 2rem 4rem;

	@media screen and (max-width: 800px) {
		margin-top: 3rem;
	}
`

const FooterText = styled.h1`
	font-weight: 700;
`

const FooterSubText = styled.h4`
	font-weight: 300;
`

const IconsContainer = styled.div`
	font-size: 2rem;

	a {
		color: white;
		text-decoration: none;
	}
`

const GithubContainer = styled.div`
	color: white;
	font-size: 1.7rem;
	padding: 4rem;

	a {
		color: white;
		text-decoration: none;
	}
`

const Footer = () => {
	return (
		<div>
			<img
				src={footer_waves_svg}
				width="100%"
				style={{ position: "relative", top: "1px" }}
			></img>

			<FooterContainer>
				<TextContainer>
					<br></br>
					<FooterText>KIIT FOSS/OSH</FooterText>

					<FooterSubText>
						KIIT's Open Source Software <br></br> and Hardware
						Community
					</FooterSubText>

					<IconsContainer>
						<a
							href="http://t.me/kiitfoss"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								style={{ marginRight: "1.3rem" }}
								className="fab fa-telegram"
							></i>
						</a>

						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								style={{ marginRight: "1.3rem" }}
								className="fab fa-twitter"
							></i>
						</a>

						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								style={{ marginRight: "1.3rem" }}
								className="fab fa-medium"
							></i>
						</a>
					</IconsContainer>
				</TextContainer>

				<GithubContainer>
					<i
						className="fab fa-github"
						style={{ marginRight: "0.5rem" }}
					></i>
					<a
						href="https://github.com/kiitfoss"
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/kiitfoss
					</a>
				</GithubContainer>
			</FooterContainer>
		</div>
	)
}

export default Footer