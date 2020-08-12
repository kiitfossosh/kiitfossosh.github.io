import React from "react"
import styled from "styled-components"

import join_us_bg from "../../images/joinus_bg.svg"

const JoinUsContainer = styled.div`
	background-image: url(${join_us_bg});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 6rem 10rem 15rem 10rem;

	@media screen and (max-width: 600px) {
		padding: 6rem 2rem 15rem 3rem;
	}
`

const JoinUsHeader = styled.h1`
	font-family: "Rubik", sans-serif;
	font-weight: 700;
	color: #14213d;
	flex: 1;
	font-size: 10rem;
	line-height: 8rem;

	@media screen and (max-width: 600px) {
		font-size: 7rem;
		line-height: 6.5rem;
	}
`

const JoinUsText = styled.div`
	font-family: "Rubik", sans-serif;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	margin: 0rem;
	padding: 0rem;

	a {
		text-decoration: none;
		color: black;
		font-size: 5rem;
	}

	@media screen and (max-width: 600px) {
		margin-top: 3rem;
		padding: 1rem;

		text-align: center;
	}
`

const JoinUs = () => {
	return (
		<div id="joinus">
			<JoinUsContainer>
				<JoinUsHeader>
					Stay <br></br> In <br></br> The <br></br> Loop
				</JoinUsHeader>

				<JoinUsText>
					<div>
						<h1>
							Subscribe to our <br></br> Publication on Medium
						</h1>

						<a
							href="http://t.me/kiitfoss"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								className="fab fa-medium"
								style={{ marginRight: "0.5rem" }}
							></i>
						</a>
					</div>
				</JoinUsText>
			</JoinUsContainer>
		</div>
	)
}

export default JoinUs
