import React from "react"
import Helmet from "react-helmet"
//import styled from 'styled-components'

import SiteNavbar from '../components/Navbar/SiteNavbar'
import Home from '../components/Home/Home'
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
    <div>
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Rubik:wght@300;400;500;700;900&display=swap"
                rel="stylesheet"
            ></link>

			<script src="https://kit.fontawesome.com/f0e3875af3.js" crossorigin="anonymous"></script>
        </Helmet>

        <SEO title="KIIT FOSS/OSH"></SEO>

		<SiteNavbar />
		<Home />

    </div>
)

export default IndexPage
