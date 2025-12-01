import Tester from '../../../../tests/Tester';
import * as stories from './UsersPage.stories';

const tester = new Tester();

describe('UsersPage', () => {
  test('Default story should render', () => {
    const snapshot = tester.getSnapshot(stories.Default);
    expect(snapshot).toMatchSnapshot();
  });
});
