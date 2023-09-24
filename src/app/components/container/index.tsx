import Presenter from '@/src/app/components/presenter';
import hooks from './hooks';

const Container = async () => {
  const { perspectives } = await hooks();
  return <Presenter perspectives={perspectives} />;
};

export default Container;
