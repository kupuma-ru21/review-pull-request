'use client';

import Answer from '@/src/components/answer';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const Poll = ({
  poll,
  isLoading,
  onClick,
  isShowResults = false,
}: {
  onClick: (answerId: string) => Promise<void>;
  poll: {
    answers: {
      id: string;
      percentage: number;
      text: string;
      votes: number;
    }[];
    id: string;
    question: string;
    totalVotes: number;
  };
  isLoading?: boolean;
  isShowResults?: boolean;
}) => {
  const handleClick = async (answerId: string) => {
    await onClick(answerId);
  };

  return (
    <div>
      <h1 className="text-6xl mb-6">{poll.question}</h1>
      <p className="text-2xl mb-6">
        Total votes:
        {' '}
        {poll.totalVotes.toLocaleString()}
      </p>

      <ul className="max-w-3xl">
        {/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */}
        {poll.answers.map((answer) => (
          <Answer
            isDisabled={isShowResults}
            isLoading={isLoading}
            isShowPercentage={isShowResults}
            key={answer.id}
            // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-misused-promises
            onClick={async () => handleClick(answer.id)}
            percentage={answer.percentage}
            text={answer.text}
            votes={answer.votes}
          />
        ))}
      </ul>
    </div>
  );
};

export default Poll;
