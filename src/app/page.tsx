import { css } from '@/styled-system/css';
import { useCallback } from 'react';

const isBoolean = true;

const Home = ({
  isBool,
  onClick,
}: {
  isBool: boolean;
  onClick: () => void;
}) => {
  const doSomething = useCallback(() => {
    if (!isBool) {
      console.error('Nothing to do!');
      return;
    }

    onClick();
  }, [isBool, onClick]);

  return (
    <button
      className={css({ fontSize: '6xl', fontWeight: 'bold' })}
      onClick={doSomething}
      type="button"
    >
      {isBool ? 'Home' : null}
    </button>
  );
};

export default Home;
