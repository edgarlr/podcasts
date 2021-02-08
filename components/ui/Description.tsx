const Description = ({ content }: { content: string }) => {
  return (
    <p className="description">
      {content}

      <style jsx>{`
        .description {
          color: var(--gray-60);
          font-size: var(--font-sm);
          padding: 0;
          margin: 0.75rem 0;
          overflow: hidden;
          line-height: 1.25;
          position: relative;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </p>
  )
}

export default Description
