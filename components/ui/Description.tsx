import { CSSProperties, useState } from 'react'

type Props = {
  content: string
  style?: CSSProperties
}

const Description = ({ content, style = {} }: Props) => {
  const [isShowed, setIsShowed] = useState<boolean>(false)

  return (
    <div onClick={() => setIsShowed(!isShowed)} style={style}>
      <p className={content.length > 280 && (!isShowed ? 'hide' : '')}>
        {content}
      </p>

      <style jsx>{`
        div {
          margin: 0
          padding: 0;
          cursor: pointer;
        }
        p {
          line-height: 1.25;
          margin: .5rem 0;
          font-size: var(--font-sm);
          color: var(--primary-90);
          position: relative;
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
          background: var(--secondary);
        }
        @media screen and (min-width: 768px) {
          .hide::after {
            left: 15%
          }
        }
      `}</style>
    </div>
  )
}

export default Description
