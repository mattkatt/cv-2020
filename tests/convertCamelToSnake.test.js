const camelToSnake = require('../src/plugins/convertVarTypes').camelToSnake

test('convert snake to camel', () => {
    expect(camelToSnake('testCase')).toBe('test_case')
});