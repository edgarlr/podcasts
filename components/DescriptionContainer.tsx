import { useState } from 'react'

const DescriptionContainer = ({ content }: { content: string }) => {
  const [isShowed, setIsShowed] = useState<boolean>(false)

  return (
    <div onClick={() => setIsShowed(!isShowed)}>
      <p className={content.length > 280 && (!isShowed ? 'hide' : ' ')}>
        {content}
      </p>

      <style jsx>{`
        div {
          margin-top: 2rem;
          padding: 0;
        }
        div span {
          font-size: 0.7rem;
          text-transform: uppercase;
          margin: 0;
          font-weight: bold;
          color: var(--gray-50);
        }
        p {
          line-height: 1.25;
          font-size: 0.9rem;
          position: relative;
          transition: 0.3s;
        }
        .hide {
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
          left: 30%;
          height: 1.2em;
          font-weight: bold;
          background: var(--white);
        }
        @media screen and (min-width: 768px) {
          .hide::after {
          }
        }
      `}</style>
    </div>
  )
}

export default DescriptionContainer
