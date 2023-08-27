import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
    isBool: boolean;
    onClick: () => void;
}) => {
  const str = 'a';
  const isTest = str.includes('a');

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
