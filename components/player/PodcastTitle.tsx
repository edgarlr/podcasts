type Props = {
  title: string
  wrapAt?: number
}

export const PodcastTitle = ({ title, wrapAt = 35 }: Props) => {
  if (title.length < wrapAt) {
    return (
      <>
        <h3>{title}</h3>

        <style jsx>{`
          h3 {
            margin: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: var(--font-sm);
            color: var(--secondary);
          }
        `}</style>
      </>
    )
  }

  return (
    <div className="title-container">
      <p>{title}</p>
      <p>{title}</p>
      <style jsx>{`
        .title-container {
          display: flex;
          justify-content: flex-start;
          padding: 0;
          overflow: hidden;
        }

        p {
          margin: 0;
          font-size: var(--font-sm);
          color: var(--secondary);
          font-weight: bold;
          white-space: nowrap;
          margin-right: 3.5rem;
          animation: move-text 12s linear;
          animation-delay: 4s;
        }

        @keyframes move-text {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 3.5rem));
          }
        }
      `}</style>
    </div>
  )
}
