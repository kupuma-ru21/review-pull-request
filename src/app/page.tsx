import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
  readonly isBool: boolean;
  readonly onClick: () => void;
}) => {
  async function invalidInTryCatch1() {
    try {
      return await Promise.resolve('try');
    } catch (e) {
      return null;
    }
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
