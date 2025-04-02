const { square } = require('./index');

// Simple test function to simulate a test framework
function test(description, fn) {
  try {
    fn();
    console.log(`✔️  ${description}`);
  } catch (error) {
    console.error(`❌  ${description}`);
    console.error(error);
  }
}

// Simple assertion function
function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected ${received} to be ${expected}`);
      }
    }
  };
}

// Tests for the square function
test('square function with 2', () => {
  expect(square(2)).toBe(4);
});

test('square function with 3', () => {
  expect(square(3)).toBe(9);
});

test('square function with 4', () => {
  expect(square(4)).toBe(16);
});