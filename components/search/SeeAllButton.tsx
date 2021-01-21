import Link from 'next/link'

const SeeAllButton = ({
  section,
  keyword,
}: {
  section: 'episodes' | 'channels'
  keyword: string
}) => (
  <>
    <Link href={`/search/${section}/${encodeURIComponent(keyword)}`}>
      <a>See all {section}</a>
    </Link>

    <style jsx>{`
      a {
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--gray-80);
        text-decoration: none;
      }
    `}</style>
  </>
)

export default SeeAllButton
