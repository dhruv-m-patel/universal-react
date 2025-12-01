import Tester from '../../../../tests/Tester';
import * as stories from './PostDetailPage.stories';

const tester = new Tester();

describe('PostDetailPage', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });

  test('LoadingPost story should render', () => {
    const snapshot = tester.getSnapshot(stories.LoadingPost);
    expect(snapshot).toMatchSnapshot();
  });

  test('LoadingComments story should render', () => {
    const snapshot = tester.getSnapshot(stories.LoadingComments);
    expect(snapshot).toMatchSnapshot();
  });

  test('PostError story should render', () => {
    const snapshot = tester.getSnapshot(stories.PostError);
    expect(snapshot).toMatchSnapshot();
  });

  test('CommentsError story should render', () => {
    const snapshot = tester.getSnapshot(stories.CommentsError);
    expect(snapshot).toMatchSnapshot();
  });

  test('NoComments story should render', () => {
    const snapshot = tester.getSnapshot(stories.NoComments);
    expect(snapshot).toMatchSnapshot();
  });
});
