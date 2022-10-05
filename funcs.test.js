
const myFunctions = require('./funcs.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
    const target = 4;
    const result = myFunctions.div(12, 3);
    expect(target).toBe(result);
});

test('Testing div 2 -- success', () => {
    const target = Infinity;
    const result = myFunctions.div(6, 0);
    expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers("hereissomete2xt");
    expect(target).toBe(result);
});

test('Testing containsNumbers 2 -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers("hereissomemoretext");
    expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers("");
    expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers("");
    expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers("-0here");
    expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers(" ");
    expect(target).toBe(result);
});


