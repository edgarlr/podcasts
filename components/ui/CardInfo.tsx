import React from 'react'

const CardInfo = ({ data }: { data: string[] }) => {
  return (
    <div>
      {data.map((text, index) => (
        <p className="content" key={index}>
          {text}
        </p>
      ))}
      <style jsx>{`
        div {
          display: flex;
        }
        .content {
          color: var(--gray-50);
          font-size: 0.7rem;
          margin: 0;
        }
        .content:not(:last-child):after {
          content: ' · ';
          margin: 0 0.3rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default CardInfo
