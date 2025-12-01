import Tester from '../../../../../tests/Tester';
import * as stories from './Pagination.stories';

const tester = new Tester();

describe('Pagination', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });

  test('FirstPage story should render', () => {
    const snapshot = tester.getSnapshot(stories.FirstPage);
    expect(snapshot).toMatchSnapshot();
  });

  test('LastPage story should render', () => {
    const snapshot = tester.getSnapshot(stories.LastPage);
    expect(snapshot).toMatchSnapshot();
  });

  test('FewPages story should render', () => {
    const snapshot = tester.getSnapshot(stories.FewPages);
    expect(snapshot).toMatchSnapshot();
  });

  test('ManyPages story should render', () => {
    const snapshot = tester.getSnapshot(stories.ManyPages);
    expect(snapshot).toMatchSnapshot();
  });

  test('WithoutPageInfo story should render', () => {
    const snapshot = tester.getSnapshot(stories.WithoutPageInfo);
    expect(snapshot).toMatchSnapshot();
  });

  test('CustomMaxPages story should render', () => {
    const snapshot = tester.getSnapshot(stories.CustomMaxPages);
    expect(snapshot).toMatchSnapshot();
  });

  test('SinglePage story should render (null)', () => {
    const snapshot = tester.getSnapshot(stories.SinglePage);
    expect(snapshot).toMatchSnapshot();
  });
});
