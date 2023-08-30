import { css } from '@/styled-system/css';
import Link from 'next/link';

const Home = () => (
  <ul className="list-disc pl-4 text-xl">
    <li>
      <Link className={css({ fontSize: '3xl', fontWeight: 'bold' })} href="/cc">
        Client Components example
      </Link>
    </li>
    <li>
      <Link className={css({ fontSize: '3xl', fontWeight: 'bold' })} href="/rsc">
        RSC example
      </Link>
    </li>
  </ul>
);

export default Home;
