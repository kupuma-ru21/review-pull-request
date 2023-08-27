import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
  readonly isBool: boolean;
  readonly onClick: () => void;
}) => {
  const func = (num: number | undefined) => {
    const data = ['foo', 'bar', 'baz'];
    const dataLast = data.length && data[data.length - 1];
  };
  return (
    <button
      className={css({ fontSize: '6xl', fontWeight: 'bold' })}
      onClick={onClick}
      type="button"
    >
      {isBool ? 'Home' : null}
    </button>
  );
};

export default Home;
