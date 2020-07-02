function sum(num1 = 0, num2 = 0) {
	num1 = parseInt(num1) || 0;
	num2 = parseInt(num2) || 0;
	if (Array.isArray(num1) || typeof num1 === 'object') {
		num1 = 0;
	} else if (Array.isArray(num2) || typeof num2 === 'object') {
		num2 = 0;
	}

	return num1 + num2;
}

// console.log(sum(, '2'));

// test('should add 2 numbers', () => {
// 	const resultNums = sum(2, 3);
// 	const resultArrArr = sum([], []);
// 	const resultArrNum = sum(2, []);
// 	const resultArrObj = sum([], {});
// 	const resultObjNum = sum({}, 1);
// 	const resultStrNum = sum('2', 3);
// 	const resultStrStr = sum('2', '3');
// 	const resultEmptyStr = sum('', 2);
// 	const resultOneArg = sum(2);
// 	const resultNoArg = sum();
// 	expect(resultNums).toBe(5);
// 	expect(resultArrArr).toBe(0);
// 	expect(resultArrNum).toBe(2);
// 	expect(resultArrObj).toBe(0);
// 	expect(resultObjNum).toBe(1);
// 	expect(resultStrNum).toBe(5);
// 	expect(resultStrStr).toBe(5);
// 	expect(resultEmptyStr).toBe(2);
// 	expect(resultOneArg).toBe(2);
// 	expect(resultNoArg).toBe(0);
// });
