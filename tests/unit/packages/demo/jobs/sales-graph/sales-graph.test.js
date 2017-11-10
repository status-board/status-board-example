const fileToTest = require('../../../../../../packages/demo/jobs/sales-graph/sales-graph');

describe('Sales Graph', function () {
  test('onRun to match snapshot', function () {
    expect(fileToTest.onRun).toMatchSnapshot();
  });
});