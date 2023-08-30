'use client';

import Answer from '@/src/components/answer';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const PollSkeleton = () => (
  <div>
    <h1 className="text-6xl mb-6">
      🚀
      <br />
      Loading...
    </h1>
    <p className="text-2xl mb-6">Total votes: 0</p>

    <ul className="max-w-3xl">
      <Answer isLoading text="Loading..." />
      <Answer isLoading text="Loading..." />
      <Answer isLoading text="Loading..." />
      <Answer isLoading text="Loading..." />
    </ul>
  </div>
);

export default PollSkeleton;
