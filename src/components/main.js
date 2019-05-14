import { Link, graphql, StaticQuery } from 'gatsby'
import React from "react"
import styled from 'styled-components'

const StyledContainer = styled.div`
background: rgb(51,52,51)
`

const Main = () => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "wood.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 500) {
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
        <StyledContainer>
          <p>Lorem ipsum dolor amet helvetica gochujang chambray hella. Et poke put a bird on it drinking vinegar, blog synth craft beer authentic. Irure bicycle rights ugh, vice tumblr tacos in schlitz echo park mixtape brunch. Cronut iceland meh salvia craft beer vegan enamel pin pariatur cupidatat mlkshk tumblr. Shoreditch kinfolk fugiat art party try-hard freegan pabst enim cloud bread fixie bushwick post-ironic sed af. Est adaptogen nisi mumblecore, food truck forage subway tile keytar eiusmod ullamco 90's pour-over. Man bun freegan chillwave, DIY heirloom typewriter jianbing swag deep v retro exercitation.
          </p>
        </StyledContainer>
      )
    }
    }
  />
)

export default Main
