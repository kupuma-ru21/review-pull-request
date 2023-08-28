export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _Any: { input: any; output: any; }
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID']['output'];
  percentage: Scalars['Float']['output'];
  text: Scalars['String']['output'];
  votes: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  answerPoll?: Maybe<Poll>;
};


export type MutationAnswerPollArgs = {
  answerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type Poll = {
  __typename?: 'Poll';
  answers: Array<Answer>;
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
  totalVotes: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  poll?: Maybe<Poll>;
};


export type QueryPollArgs = {
  id: Scalars['ID']['input'];
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String']['output'];
};
