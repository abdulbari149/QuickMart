/* eslint-disable global-require */
export default function getStories() {
  return [
    require('../src/components/Typography/typography.stories'),
    require('../src/components/Button/button.stories'),
  ];
}
