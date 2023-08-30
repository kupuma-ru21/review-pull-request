import { css } from '@/styled-system/css';
import Link from 'next/link';

const Home = () => (
  <Link className={css({ fontSize: '3xl', fontWeight: 'bold' })} href="/rsc">
    RSC example
  </Link>
);

export default Home;
