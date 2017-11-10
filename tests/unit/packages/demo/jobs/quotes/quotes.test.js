const fileToTest = require('../../../../../../packages/demo/jobs/quotes/quotes');

describe('Quotes', function () {
  test('onRun to match snapshot', function () {
    expect(fileToTest.onRun).toMatchSnapshot();
  });
});