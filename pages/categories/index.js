import 'isomorphic-fetch'
import Layout from '../../components/Layout';
import Error from 'next/error'
import MainTitle from '../../components/MainTitle';
import Grid from '../../components/Grid';
import CategoryCover from '../../components/CategoryCover';

export async function getServerSideProps(context) {
  try {
    let req = await fetch(
      'https://api.audioboom.com/categories?api_version=2'
    );
    let { body: categories } = await req.json();

    return { props: {categories, statusCode: context.res.statusCode} };
  } catch (error) {
    return {props: { categories: null, statusCode: context.res.statusCode }}
  }
}

export default function Categories ({categories, statusCode}) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title='Categories | Podcasts'>
      <MainTitle title='Categories' />

      <div className='content'>
        <Grid title='All categories'>
          {categories.map((category, index) => (
            <CategoryCover category={category} index={index} />
          ))}
        </Grid>
      </div>

      <style jsx>{`
        .content {
          padding: 0 1.5em;
        }
      `}</style>
    </Layout>
  );
}