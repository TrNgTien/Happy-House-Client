import styles from './welcome.module.css';
import useTrans from '../../hooks/useTrans';
const WelcomePage = () => {
  const trans = useTrans();
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>{trans.home.title}</h1>
        <p className={styles.description}>{trans.billing.content}</p>
      </main>
    </>
  );
};

export default WelcomePage;
