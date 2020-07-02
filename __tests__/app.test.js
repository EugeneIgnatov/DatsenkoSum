const sum = require('../app');

test('should add 2 numbers', () => {
	const resultNums = sum(2, 3);
	expect(resultNums).toBe(5);
});

test('should add num with string', () => {
	const resultStrNum = sum('2', 3);
	expect(resultStrNum).toBe(5);
});

test('should addd two string with num values', () => {
	const resultStrStr = sum('2', '3');
	expect(resultStrStr).toBe(5);
});

test('should ingnore empty string or string withount intg val', () => {
	const resultEmptyStr = sum('', 2);
	expect(resultEmptyStr).toBe(2);
});

test('should return one argument if another is missing', () => {
	const resultOneArg = sum(2);
	expect(resultOneArg).toBe(2);
});

test('should return 0 if both args are missing', () => {
	const resultNoArg = sum();
	expect(resultNoArg).toBe(0);
});

test('should ignore both args if both are arrays', () => {
	const resultArrArr = sum([], []);
	expect(resultArrArr).toBe(0);
});

test('should ignore arrg if arg=arr', () => {
	const resultArrNum = sum(2, []);
	expect(resultArrNum).toBe(2);
});

test('should ignore both args if both of them arr or obj', () => {
	const resultArrObj = sum([], {});
	expect(resultArrObj).toBe(0);
});

test('should ignore arg if that arg is obj', () => {
	const resultObjNum = sum({}, 1);
	expect(resultObjNum).toBe(1);
});
