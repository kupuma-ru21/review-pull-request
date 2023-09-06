import getClient from '@/src/client';
import { TodosDocument } from '@/src/app/todos.generated';
import Presenter from './presenter';

const Container = async () => {
  const { data } = await getClient().query({ query: TodosDocument });
  return <Presenter todos={data.todos} />;
};

export default Container;
