'use client';

// Error components must be Client Components

import { useCallback } from 'react';

const Error = ({
  onReset,
}: {
    readonly onReset: () => void;
}) => {
  const reset = useCallback(() => {
    onReset();
  }, [onReset]);

  //   useEffect(() => {
  //     // Log the error to an error reporting service
  //     console.error(error);
  //   }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
