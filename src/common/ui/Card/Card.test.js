import Tester from '../../../../tests/Tester';
import * as stories from './Card.stories';

const tester = new Tester();

describe('Card', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });

  test('WithCustomClass story should render', () => {
    const snapshot = tester.getSnapshot(stories.WithCustomClass);
    expect(snapshot).toMatchSnapshot();
  });

  test('Jumbotron story should render', () => {
    const snapshot = tester.getSnapshot(stories.Jumbotron);
    expect(snapshot).toMatchSnapshot();
  });
});
