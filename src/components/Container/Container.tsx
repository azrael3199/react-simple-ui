import { ContainerProps } from './Container.types';

const buildClassString = (props: ContainerProps): string => {
  let classString = '';
  Object.keys(props.style).forEach((key: string) => {
    classString += `${props.style[key]} `;
  });
  return classString;
};

const Container = (props: ContainerProps) => {
  const classString: string = buildClassString(props);

  return <div className={classString}>{props.children}</div>;
};

export default Container;
