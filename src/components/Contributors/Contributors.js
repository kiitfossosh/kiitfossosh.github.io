import React from "react"
import styled from "styled-components"

import contributors_bg_img from "../../images/contributors_bg.svg"

const ContributorsContainer = styled.div`
	background-image: url(${contributors_bg_img});
	background-repeat: no-repeat;
	background-size: contain;

	@media screen and (max-width: 600px){
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

	@media screen and (max-width: 600px){
		font-size: 2.3rem;
	}
`

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	padding: 4rem 8rem 9rem 8rem;

	@media screen and (max-width: 700px) {
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
	padding: 2.5rem 1.6rem 2.5rem 1.6rem;

	.name {
		font-family: "Rubik", sans-serif;
		text-align: center;
		font-size: 2rem;
	}

	a {
		text-decoration: none;
		color: black;
	}

	i {
		font-size: 2rem;
		margin-left: 2rem;
		margin-top: 1rem;
	}
`

const Contributors = () => {
	return (
		<div id="contributors">
			<ContributorsContainer>
				<HeadText>Contributors</HeadText>

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
					{[...Array(9)].map(e => (
						<Card>
							<h3 className="name">Junaid H Rahim</h3>

							<div style={{ textAlign: "center" }}>
								<a href="#">
									<i className="fab fa-github"></i>
								</a>

								<a href="#">
									<i className="fab fa-linkedin"></i>
								</a>

								<a href="#">
									<i className="far fa-window-maximize"></i>
								</a>
							</div>
						</Card>
					))}
				</CardContainer>
			</ContributorsContainer>
		</div>
	)
}

export default Contributors
