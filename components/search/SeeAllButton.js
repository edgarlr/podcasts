import Link from 'next/link'
import { colors, fontWeight } from 'styles/theme'
import PropTypes from 'prop-types'

const SeeAllButton = ({ section, keyword }) => (
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

SeeAllButton.propTypes = {
  section: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
}
