import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
  readonly isBool: boolean;
  readonly onClick: () => void;
}) => {
  const arrowFunctionReturnsPromise = async () => Promise.resolve('value');
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
