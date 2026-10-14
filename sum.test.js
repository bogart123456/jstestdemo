const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});

// Added in Step 5 to exercise the SCM poll trigger in Jenkins.
test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
