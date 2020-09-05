import Link from 'next/link';

export default function CategoryCover({category, index}) {
  return (
    <div key={index}>
      <Link
        href={`/categories/[categoryId]?id=${category.id}`}
        key={index}
        as={`/categories/${category.id}`}
      >
        <a className='category' style={{background: `linear-gradient(45deg, ${category.gradient.start}, ${category.gradient.end})`}}>
          <h2>{category.title}</h2>
        </a>
      </Link>

      <style jsx>{`
        .category {
          display: block;
          border-radius: 3px;
          margin: 0;
        }
        a {
          width: 100%;
          padding-top: 100%;
          border-radius: 20px;
          box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05);
          color: white;
          text-decoration: none;
        }
        h2 {
          padding: 0 .5rem;
          margin: 8px 0 0;
          font-size: 2rem;
          font-weight: 400;
          text-align: left;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
