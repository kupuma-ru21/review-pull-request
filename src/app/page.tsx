import { css } from '@/styled-system/css';

enum Fruit {
  Apple,
  Banana
}

const Home = ({
  isBool,
  onClick,
}: {
    isBool: boolean;
    onClick: () => void;
}) => {
  function foo1() {
    return 1 as any;
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
