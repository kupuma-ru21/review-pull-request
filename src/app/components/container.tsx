import getClient from '@/src/client';
import { PerspectivesDocument } from '@/src/app/todos.generated';
import Presenter from './presenter';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/no-magic-numbers, @typescript-eslint/no-unsafe-assignment
export const perspectives = [...Array(10)].map((_, index) => `perspective${index + 1}`);

const Container = async () => {
  const { data } = await getClient().query({ query: PerspectivesDocument });
  console.log(data);
  return <Presenter perspectives={perspectives} />;
};

export default Container;
