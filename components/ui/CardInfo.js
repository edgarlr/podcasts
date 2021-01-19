import React from 'react'
import { colors } from 'styles/theme'
import PropTypes from 'prop-types'

const CardInfo = ({ data }) => {
  return (
    <div>
      {data.map((text, index) => (
        <p className="duration" key={index}>
          {text}
        </p>
      ))}
      <style jsx>{`
        div {
          display: flex;
        }
        .duration {
          color: ${colors.midGray};
          font-size: 0.7rem;
          margin: 0;
        }
        .duration:not(:last-child):after {
          content: ' · ';
          margin: 0 0.3rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default CardInfo

CardInfo.propTypes = {
  data: PropTypes.array,
}
