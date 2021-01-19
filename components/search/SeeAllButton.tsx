import Link from 'next/link'
import { colors, fontWeight } from 'styles/theme'

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
        font-weight: ${fontWeight.bold};
        color: ${colors.darkGray};
        text-decoration: none;
      }
    `}</style>
  </>
)

export default SeeAllButton
