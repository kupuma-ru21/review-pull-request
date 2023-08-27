import { css } from '@/styled-system/css';

type Foo = {
  bar?: string;
  num?: number;
};

const foo: Foo = {};
const isEqualsBar = foo.bar === 'hello';

const Home = ({
  isBool,
  onClick,
}: {
  isBool: boolean;
  onClick: () => void;
}) => (
  <button
    className={css({ fontSize: '6xl', fontWeight: 'bold' })}
    onClick={onClick}
    type="button"
  >
    {isBool ? 'Home' : null}
  </button>
);

export default Home;
