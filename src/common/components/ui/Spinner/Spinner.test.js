import Tester from '../../../../../tests/Tester';
import * as stories from './Spinner.stories';

const tester = new Tester();

describe('Spinner', () => {
  test('Small story should render', () => {
    const snapshot = tester.getSnapshot(stories.Small);
    expect(snapshot).toMatchSnapshot();
  });

  test('Medium story should render', () => {
    const snapshot = tester.getSnapshot(stories.Medium);
    expect(snapshot).toMatchSnapshot();
  });

  test('Large story should render', () => {
    const snapshot = tester.getSnapshot(stories.Large);
    expect(snapshot).toMatchSnapshot();
  });

  test('WithLabel story should render', () => {
    const snapshot = tester.getSnapshot(stories.WithLabel);
    expect(snapshot).toMatchSnapshot();
  });
});
