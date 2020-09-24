import React from 'react'

const ErrorMessage = ({title, subtitle}) => {
  return (
    <div className='error-message'>
      <h6>{title}</h6>
      <p>{subtitle}</p>

      <style jsx>{`
        .error-message {
          text-align: center;
          margin: 5rem auto;
        }
        h6 {
          font-size: 1.2rem;
          margin: .5rem 0;
        }
        p {
          font-size: .9rem;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default ErrorMessage
