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

	@media screen and (max-width: 700px){
		padding: 3rem;
	}
`

const TextHead = styled.h1`
	font-family: "Rubik", sans-serif;
	font-weight: 700;
	font-size: 3.4rem;
	margin-bottom: 0.3rem;
`

const TextSubHead = styled.p`
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	padding: 0 20% 0 20%;
	font-size: 1.2rem;
	margin-top: 2rem;

	@media screen and (max-width: 700px) {
		padding: 0rem;
	}
`

const LeftImage = styled.img`
	width: 13%;
	position: relative;
	float: left;
	top: -30rem;

	display: none;

	@media screen and (max-width: 600px){
		display: none;
	}
`;

const RightImage = styled.img`
	position: relative;
	top: -20rem;
	float: right;
	width: 10%;
	display: none;
	
	@media screen and (max-width: 600px){
		display: none;
	}
`;

const AboutUs = () => {
	return (
		<div id="aboutus">
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
					KIIT FOSS/OSH is an Open Source Community, which aims to provide everyone a
					place where innovations takes place in a collaborative environment with
					Open Source technologies and principles. We believe in working together in
					an Open environment, which has a better impact on society and also brings
					developers and innovators closer. By working together for a greater cause,
					you are not only working with great minds all around, but also giving those 
					an opportunity to learn, innovate and grow.
				</TextSubHead>
			</AboutUsContainer>
			
			<LeftImage src={about_plant_left}></LeftImage>
			<RightImage src={about_plant_right}></RightImage>
		</div>
	)
}

export default AboutUs
