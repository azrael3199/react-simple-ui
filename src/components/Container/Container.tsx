import { ContainerProps } from './Container.types';

const Container = (props: ContainerProps) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Container;
