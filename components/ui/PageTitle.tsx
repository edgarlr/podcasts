import Link from 'next/link'
import cn from 'classnames'

type Props = {
  title: string
  subtitle?: string
  linkTo?: string
  className?: string
}

export default function PageTitle({
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
          ['md']: title.length < 80 && title.length >= 60,
          ['lg']: title.length < 60 && title.length >= 40,
          ['xl']: title.length < 40 && title.length >= 30,
          ['xxl']: title.length < 30,
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
          font-size: var(--font-sm);
          margin: 0.25rem 0;
        }
        .title.md {
          font-size: var(--font-md);
        }
        .title.lg {
          font-size: var(--font-lg);
        }
        .title.xl {
          font-size: var(--font-xl);
        }
        .title.xxl {
          font-size: var(--font-2xl);
        }
        p,
        a {
          margin: 0;
          color: var(--primary-60);
          font-size: var(--font-xs);
          text-transform: uppercase;
        }
        @media screen and (min-width: 1024px) {
          .title {
            font-size: var(--font-lg);
          }
          .title.md {
            font-size: var(--font-xl);
          }
          .title.lg {
            font-size: var(--font-xl);
          }
          .title.xl {
            font-size: var(--font-2xl);
          }
          .title.xxl {
            font-size: var(--font-3xl);
          }
        }
      `}</style>
    </div>
  )
}
