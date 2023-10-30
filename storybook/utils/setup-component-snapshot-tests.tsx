import React from 'react';
import renderer from 'react-test-renderer';

import type { ComponentType, ComponentConfig } from './component-config';
import getComponentPropsVariants from './get-component-props-variants';

const setupComponentSnapshotTests = <T extends ComponentType>(
  config: ComponentConfig<T>,
): void => {
  const { englishArgTypes } = getComponentPropsVariants(config);
  describe(`Given - ${config.component.name} component`, () => {
    if (englishArgTypes?.[0])
      englishArgTypes.forEach((props) => {
        describe(`and props are: ${JSON.stringify(props)}`, () => {
          it('should render correctly and match snapshot', () => {
            const tree = renderer
              .create(<config.component {...props} />)
              .toJSON();
            expect(tree).toMatchSnapshot();
          });
        });
      });
    else
      describe(`and without props`, () => {
        it('should render correctly and match snapshot', () => {
          const tree = renderer.create(<config.component />).toJSON();
          expect(tree).toMatchSnapshot();
        });
      });
  });
};

export default setupComponentSnapshotTests;
