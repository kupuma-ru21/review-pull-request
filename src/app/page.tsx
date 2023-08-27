import { css } from '@/styled-system/css';
import { useCallback } from 'react';

type Example = {
  property?: string;
}

const example: Example = {};
const isIncludesBaz = example.property?.includes('baz');

const Home = ({
  isBool,
  onClick,
}: {
  isBool: boolean;
  onClick: () => void;
}) => {
  function foo(arg: 'bar' | undefined) {
    if (arg) {
      console.log(arg);
    }
  }

  const doSomething = useCallback(() => {
    if (!isBool) {
      console.error('Nothing to do!');
      return;
    }

    onClick();
  }, [isBool, onClick]);

  if (!isBool) {
    return null;
  }

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
