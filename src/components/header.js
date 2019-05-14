import { Link, graphql, StaticQuery } from 'gatsby'
import React from "react"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const HeaderWrapper = styled.div`
  height: 60vh;
  width: 100%;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  :after {
    content  : "";
    position : absolute;
    z-index  : 1;
    bottom   : 0;
    left     : 0;
    pointer-events   : none;
    background-image : 
    linear-gradient(to bottom, rgba(51,52,51, 0), rgba(51,52,51, 1) 85%),
    linear-gradient(to right, rgba(51,52,51,1) 0%,
      rgba(51,52,51,0) 5%, rgba(51,52,51,0) 15%,
      rgba(51,52,51,0) 15%, rgba(51,52,51,0) 25%,
      rgba(51,52,51,0) 25%, rgba(51,52,51,0) 50%,
      rgba(51,52,51,0) 75%, rgba(51,52,51,0) 75%,
      rgba(51,52,51,0) 85%, rgba(51,52,51,0) 85%,
      rgba(51,52,51,0) 95%, rgba(51,52,51,1) 100%);
    width    : 100%;
    height   : 100%;
`

const Header = ({ className }) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "wood.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`rgb(193, 247, 213)`}
        >
          <HeaderWrapper>
            <h1>Christopher Wood</h1>
          </HeaderWrapper >
        </BackgroundImage>
      )
    }
    }
  />
)

export default Header
