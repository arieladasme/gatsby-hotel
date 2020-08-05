import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const BckgrndImg = styled(BackgroundImage)`
  height: 700px;
`

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "4.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  //console.log(image.sharp.fluid)

  return (
    <BckgrndImg
      tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    ></BckgrndImg>
  )
}

export default HotelImage
