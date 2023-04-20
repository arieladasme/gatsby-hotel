import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const BckgrndImg = styled(BackgroundImage)`
  height: 700px;
`

const TextImage = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0%;
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
  }
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

  return (
    <BckgrndImg tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextImage>
        <h1>Bienvenido a Gatsby Hotel</h1>
        <p>Disfruta de los mejores Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín</p>
      </TextImage>
    </BckgrndImg>
  )
}

export default HotelImage
