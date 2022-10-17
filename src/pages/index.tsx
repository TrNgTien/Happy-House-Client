import type { NextPage } from 'next';
import Head from 'next/head';
import AuthenPage from './auth';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Happy House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthenPage />
      </main>
    </div>
  );
};

export default Home;
