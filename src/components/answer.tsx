'use client';

const INITIAL_PERCENTAGE = 0;
const INITIAL_VOTES = 0;
const PRECISION = 2;

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Answer = ({
  text,
  percentage = INITIAL_PERCENTAGE,
  isShowPercentage = false,
  isDisabled = false,
  isLoading = false,
  votes = INITIAL_VOTES,
  onClick,
}: {
  text: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isShowPercentage?: boolean;
  onClick?: () => void;
  percentage?: number;
  votes?: number;
}) => (
  <li className="flex mb-4">
    <button disabled={isDisabled || isLoading} onClick={onClick} type="button">
      <div
        style={{
          width: isShowPercentage ? `${percentage}%` : INITIAL_PERCENTAGE,
        }}
      />

      {isLoading ? <div /> : null}

      <span className="relative z-10">{text}</span>
    </button>

    <div>
      <div>
        {percentage.toPrecision(PRECISION)}
        %
      </div>
      <div className="text-xs">
        (
        {votes}
        {' '}
        votes)
      </div>
    </div>
  </li>
);

export default Answer;
