import { CSSProperties } from 'react'

type Props = {
  title: string
  wrapAt: number
  style: CSSProperties
}

export const PodcastTitle = ({ title, wrapAt = 35, style }: Props) => {
  if (title.length < wrapAt) {
    return (
      <div className="main-container">
        <h3 style={style}>{title}</h3>

        <style jsx>{`
          .main-container {
            display: flex;
            padding: 0;
            justify-content: center;
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
    )
  }

  return (
    <div className="main-container">
      <p>{title}</p>
      <p>{title}</p>
      <style jsx>{`
        .main-container {
          display: flex;
          padding: 0;
          justify-content: flex-start;
        }

        p {
          margin: 0;
          font-size: 1rem;
          position: relative;
          color: white;
          margin-right: 5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          animation: move-text 12s linear;
          animation-delay: 5s;
        }

        @keyframes move-text {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 5rem));
          }
        }
      `}</style>
    </div>
  )
}
