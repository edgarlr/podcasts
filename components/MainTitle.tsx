import Link from 'next/link'

type Props = {
  title: string
  subtitle?: string
  linkTo?: string
  className?: string
}

export default function MainTitle({
  title,
  subtitle = null,
  linkTo = null,
  className = '',
}: Props) {
  return (
    <div className={className}>
      {linkTo && (
        <Link href={linkTo}>
          <a>{subtitle}</a>
        </Link>
      )}

      {subtitle && !linkTo && <p>{subtitle}</p>}

      <h1
        className={`title ${
          title.length < 15 ? '' : title.length > 35 ? 'extra-long' : 'long'
        }`}
      >
        {title}
      </h1>

      <style jsx>{`
        div {
          height: auto;
          display: block;
          color: var(--black);
          background: var(--white);
          font-weight: bold;
        }
        }
        .title {
          font-size: 2rem;
          margin: 8px 0;
        }
        .title.long {
          font-size: 1.2rem;
        }
        .title.extra-long {
          font-size: 0.85rem;
        }
        @media screen and (min-width: 768px) {
          .title.long {
            font-size: 1.5rem;
          }
          .title.extra-long {
            font-size: 1.2rem;
          }
        }
        @media screen and (min-width: 1024px) {
          .title.long {
            font-size: 2rem;
          }
          .title.extra-long {
            font-size: 1.5rem;
          }
        }
        p,
        a {
          margin: 0;
          font-size: 0.7rem;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
