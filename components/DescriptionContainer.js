import React, { useState } from 'react';
import { fontWeight, colors } from 'styles/theme';

const DescriptionContainer = ({ data }) => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <div onClick={() => setIsShowed(!isShowed)}>
      {data.length < 200 && <p>{data}</p>}

      {data.length > 200 && <p className={!isShowed ? 'hide' : ' '}>{data}</p>}

      <style jsx>{`
        div span {
          font-weight: ${fontWeight.bold};
          color: ${colors.midGray};
        }
        .hide::after {
          font-weight: ${fontWeight.bold};
          background: ${colors.white};
        }
      `}</style>

      <style jsx>{`
        div {
          padding: 1rem 0;
        }
        div span {
          font-size: 0.7rem;
          text-transform: uppercase;
          margin: 0;
        }
        p {
          line-height: 1.25;
          font-size: 1rem;
          position: relative;
          transition: 0.3s;
        }
        .hide {
          height: 5rem;
          overflow-y: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .hide::after {
          content: '... see more';
          text-align: left;
          padding-left: 0.2rem;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 14.1rem;
          height: 1.2em;
        }
      `}</style>
    </div>
  );
};

export default DescriptionContainer;
