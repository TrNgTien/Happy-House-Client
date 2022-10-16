import { useRouter } from 'next/router';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const useTrans = () => {
  const { locale } = useRouter();
  const trans = locale === 'vi' ? vi : en;

  return trans;
};

export default useTrans;
