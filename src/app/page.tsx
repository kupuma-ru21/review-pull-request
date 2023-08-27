import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
    isBool: boolean;
    onClick: () => void;
}) => {
  function foo(onExample: () => number): number {
    return onExample();
  }

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
