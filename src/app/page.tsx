import { css } from '@/styled-system/css';

const Home = ({
  isBool,
  onClick,
}: {
    isBool: boolean;
    onClick: () => void;
}) => {
  function foo1() {
    const array = [1];
    for (let i = 0; i < array.length; i += 1) {
      console.log(array[i]);
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
