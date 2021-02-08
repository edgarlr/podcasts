import Link from 'next/link'
import cn from 'classnames'

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
        className={cn('title', {
          ['long']: title.length > 15 && title.length < 35,
          ['extra-long']: title.length >= 35,
        })}
      >
        {title}
      </h1>

      <style jsx>{`
        div {
          height: auto;
          display: block;
          color: var(--primary);
          background: var(--secondary);
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .title {
          font-size: var(--font-3xl);
          margin: 0.25rem 0;
        }
        .title.long {
          font-size: var(--font-lg);
        }
        .title.extra-long {
          font-size: var(--font-md);
        }
        @media screen and (min-width: 768px) {
          .title.long {
            font-size: var(--font-2xl);
          }
          .title.extra-long {
            font-size: var(--font-lg);
          }
        }
        @media screen and (min-width: 1024px) {
          .title.long {
            font-size: var(--font-3xl);
          }
          .title.extra-long {
            font-size: var(--font-2xl);
          }
        }
        p,
        a {
          margin: 0;
          color: var(--primary-60);
          font-size: var(--font-xs);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
