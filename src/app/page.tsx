import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
  readonly isBool: boolean;
  readonly onClick: () => void;
}) => {
  const func = (num: number | undefined) => {
    if (num === undefined) {
      console.log('num is defined');
    }
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
