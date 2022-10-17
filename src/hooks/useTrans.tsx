import { useRouter } from 'next/router';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const useTrans = () => {
  const { defaultLocale } = useRouter();
  const trans = defaultLocale === 'vi' ? vi : en;
  return trans;
};

export default useTrans;
