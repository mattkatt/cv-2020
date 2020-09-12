const snakeToCamel = require('../src/plugins/convertVarTypes').snakeToCamel

test('convert snake to camel', () => {
    expect(snakeToCamel('test_case')).toBe('testCase')
});