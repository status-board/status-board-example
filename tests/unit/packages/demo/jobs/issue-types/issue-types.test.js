const fileToTest = require('../../../../../../packages/demo/jobs/issue-types/issue-types');

describe('Issue Types', function () {
  test('onRun to match snapshot', function () {
    expect(fileToTest.onRun).toMatchSnapshot();
  });
});