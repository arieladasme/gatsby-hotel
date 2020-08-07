import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from './../components/layout'
import HotelImage from '../components/hotelImage'
import IndexContent from '../components/indexContent'
import RoomPreview from '../components/roomPreview'
import useRooms from '../hooks/use-rooms'

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const rooms = useRooms()

  return (
    <Layout>
      <HotelImage />
      <IndexContent />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestas Habitaciones
      </h2>

      <RoomsList>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </RoomsList>
    </Layout>
  )
}

export default IndexPage
