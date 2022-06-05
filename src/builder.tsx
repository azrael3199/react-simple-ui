import React from 'react';
import { IBlueprintProperties } from './builder.types';
import Container from './components/Container/Container';
import { defaultTheme } from './themes/themes';
import { IThemeProperties } from './types/common.types';

const buildRecursiveComponents = (
  bpObject: IBlueprintProperties,
): JSX.Element => {
  const component = bpObject.component;
  switch (component) {
    case 'container':
      return (
        <Container style={bpObject.style}>
          {bpObject.items ??
            bpObject.items.map((comp: IBlueprintProperties) =>
              buildRecursiveComponents(comp),
            )}
        </Container>
      );
    default:
      return <></>;
  }
};

const build = (
  blueprint: IBlueprintProperties,
  theme?: IThemeProperties,
): JSX.Element => {
  // TODO Use currentTheme to populate unspecified default styles in other components
  const [selectedTheme, setSelectedTheme] = React.useState<IThemeProperties>(
    theme ?? defaultTheme,
  );

  const screen: JSX.Element = buildRecursiveComponents(blueprint);
  return screen ?? <></>;
};

export default build;
