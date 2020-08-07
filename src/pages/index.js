import React from 'react'
import { css } from '@emotion/core'
import Layout from './../components/layout'
import HotelImage from '../components/hotelImage'
import IndexContent from '../components/indexContent'
import RoomPreview from '../components/roomPreview'
import useRooms from '../hooks/use-rooms'

const IndexPage = () => {
  const rooms = useRooms()
  console.log(rooms)
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

      <ul>
        {rooms.map(room => (
          <RoomPreview />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
