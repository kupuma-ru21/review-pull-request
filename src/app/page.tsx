import { css } from '@/styled-system/css';

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

function f<T = number>() {}
f();
