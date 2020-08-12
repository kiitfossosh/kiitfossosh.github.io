import React from "react"
import styled from "styled-components"

import about_plant_left from "../../images/about_plant_left.svg"
import about_plant_right from "../../images/about_plant_right.svg"

const AboutUsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	text-align: center;
	background-color: #e5e5e5;
	padding: 6rem;
`

const TextHead = styled.h1`
	font-family: "Rubik", sans-serif;
	font-weight: 700;
	font-size: 3.4rem;
	margin-bottom: 1rem;
`

const TextSubHead = styled.p`
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	padding: 0 20% 0 20%;
	font-size: 1.2rem;
	margin-top: 2rem;

	@media screen and (max-width: 600px) {
		padding: 0rem;
	}
`

const LeftImage = styled.img`
	width: 13%;
	position: relative;
	float: left;
	top: -30rem;
	left: -3rem;

	@media screen and (max-width: 600px){
		display: none;
	}
`;

const RightImage = styled.img`
	position: relative;
	top: -20rem;
	right: -4rem;
	float: right;
	width: 10%;
	
	@media screen and (max-width: 600px){
		display: none;
	}
`;

const AboutUs = () => {
	return (
		<div>
			<AboutUsContainer>
				<TextHead>About Us</TextHead>

				<hr
					align="center"
					style={{
						height: "3px",
						backgroundColor: "#FCA311",
						border: "none",
						width: "30%",
					}}
				></hr>

				<TextSubHead>
					Open source software is software with source code that
					anyone can inspect, modify, and enhance. <br></br> <br></br>
					"Source code" is the part of software that most computer
					users don't ever see; it's the code computer programmers can
					manipulate to change how a piece of software—a "program" or
					"application"—works. Programmers who have access to a
					computer program's source code can improve that program by
					adding features to it or fixing parts that don't always work
					correctly.
				</TextSubHead>
			</AboutUsContainer>
			
			<LeftImage src={about_plant_left}></LeftImage>
			<RightImage src={about_plant_right}></RightImage>
		</div>
	)
}

export default AboutUs
