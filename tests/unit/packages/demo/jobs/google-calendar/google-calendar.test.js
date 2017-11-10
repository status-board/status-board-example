const fileToTest = require('../../../../../../packages/demo/jobs/google-calendar/google-calendar');

describe('Google Calendar', function () {
  test('onInit to match snapshot', function () {
    expect(fileToTest.onInit).toMatchSnapshot();
  });
  test('onRun to match snapshot', function () {
    expect(fileToTest.onRun).toMatchSnapshot();
  });
});