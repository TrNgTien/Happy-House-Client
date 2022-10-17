import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@components/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Happy House</title>
        {/* <meta name="description" content={trans.description} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>hi ae</h1>
      </MainLayout>
    </div>
  );
};

export default Home;
