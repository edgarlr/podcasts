import React, { useEffect, useState } from 'react';

export const PodcastTitle = ({
  title,
  wrapAt = 35,
  fontSize = '1em',
  alwaysJustify = null,
}) => {
  const [shortTitle, setShortTitle] = useState(title.lenght > 100);

  useEffect(() => {
    setShortTitle(title.length > wrapAt);
  }, [title]);

  if (!shortTitle) {
    return (
      <div className={`main-container`}>
        <h3 style={{ fontSize: fontSize }}>{title}</h3>

        <style jsx>{`
          .main-container {
            display: flex;
            padding: 8px 0;
            justify-content: ${alwaysJustify || 'center'};
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          h3 {
            margin: 0;
            font-size: 1rem;
            position: relative;
            color: white;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h3 className="main-text">{title}</h3>
      <h3 className="second-text">{title}</h3>)
      <style jsx>{`
        @keyframes move-text {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 5rem));
          }
        }
        .main-container {
          display: flex;
          padding: 8px 0;
          justify-content: flex-start;
        }
        h3 {
          margin: 0;
          font-size: 1rem;
          position: relative;
          color: white;
          margin-right: 5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .main-text,
        .main-text ~ .second-text {
          animation: move-text 12s linear;
          animation-delay: 5s;
        }
        .main-text:hover,
        .main-text:hover ~ .second-text {
          animation: move-text 12s linear;
        }
      `}</style>
    </div>
  );
};
