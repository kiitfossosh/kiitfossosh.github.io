import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"

import opensource_img from "../../images/opensource.svg"

const OpenSourceContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 2rem 4rem 5rem 4rem;
`

const TextContainer = styled.div`
	font-family: "Rubik", sans-serif;
	flex: 1;
`

const TextHead = styled.h1`
	font-size: 3rem;
	font-weight: 700;
`

const TextSubHead = styled.p`
	font-family: "Open Sans";
	font-weight: 400;
	font-size: 1.3rem;
`

const ImageContainer = styled.div`
	padding-right: 4rem;

	img {
		float: right;
		width: 60%;
	}

	@media screen and (max-width: 600px) {
		padding: 0rem;

		img {
			margin: 4rem 0rem 0rem 0rem;
			width: 100%;
		}
	}
`

const OpenSource = () => {
	return (
		<OpenSourceContainer>
			<TextContainer>
				<TextHead>
					What is Open Source <br /> Software ?
					<hr
						align="left"
						style={{
							height: "3px",
							backgroundColor: "#FCA311",
							border: "none",
							width: "70%",
						}}
					></hr>
				</TextHead>

				<TextSubHead>
					Open source software is software with source code that
					anyone can inspect, modify, and enhance. <br></br> <br></br>{" "}
					"Source code" is the part of software that most computer
					users don't ever see; it's the code computer programmers can
					manipulate to change how a piece of software—a "program" or
					"application"—works. Programmers who have access to a
					computer program's source code can improve that program by
					adding features to it or fixing parts that don't always work
					correctly.
				</TextSubHead>

				<br></br>

				<Button
					style={{ color: "black" }}
					href="https://opensource.org/"
					variant="outline-warning"
					size="lg"
				>
					Learn More
				</Button>
			</TextContainer>

			<ImageContainer>
				<img src={opensource_img}></img>
			</ImageContainer>
		</OpenSourceContainer>
	)
}

export default OpenSource
