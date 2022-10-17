import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@components/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Happy House</title>
        <meta
          name="description"
          content="Quản lí nhà trọ cho bạn tiện lợi hơn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>hi ae</h1>
      </MainLayout>
    </div>
  );
};

export default Home;
