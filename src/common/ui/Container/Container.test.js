import Tester from '../../../../tests/Tester';
import * as stories from './Container.stories';

const tester = new Tester();

describe('Container', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });

  test('Fluid story should render', () => {
    const snapshot = tester.getSnapshot(stories.Fluid);
    expect(snapshot).toMatchSnapshot();
  });

  test('WithCustomClass story should render', () => {
    const snapshot = tester.getSnapshot(stories.WithCustomClass);
    expect(snapshot).toMatchSnapshot();
  });
});
