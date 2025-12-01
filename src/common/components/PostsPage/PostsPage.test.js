import Tester from '../../../../tests/Tester';
import * as stories from './PostsPage.stories';

const tester = new Tester();

describe('PostsPage', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });

  test('Loading story should render', () => {
    const snapshot = tester.getSnapshot(stories.Loading);
    expect(snapshot).toMatchSnapshot();
  });

  test('Error story should render', () => {
    const snapshot = tester.getSnapshot(stories.Error);
    expect(snapshot).toMatchSnapshot();
  });

  test('Empty story should render', () => {
    const snapshot = tester.getSnapshot(stories.Empty);
    expect(snapshot).toMatchSnapshot();
  });
});
