import Tester from '../../../../tests/Tester';
import * as stories from './UserProfilePage.stories';

const tester = new Tester();

describe('UserProfilePage', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });
});
