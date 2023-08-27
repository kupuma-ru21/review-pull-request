import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
  readonly isBool: boolean;
  readonly onClick: () => void;
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

const test = [1, 2, 3].reduce<readonly number[]>((arr, num) => arr.concat(num * 2), []);
