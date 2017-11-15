module.exports = class {
	constructor() {
		let [x = 1, y, ...z] = [undefined, 2, 3];
		console.log(x);
		console.log(z);
		let { a, b } = { b: 1, a: 0 };
		console.log(a);
		const n = {
			loc: {
				start: 1
			}
		};
		let { loc, loc: { start } } = n;
		console.log(start);
		let arr = '[10, 20, 30]';
		let { 0: first, [arr.length - 1]: last } = arr;
		console.log(first);
		console.log(last);
		let add = function ([x, y]) {
			return x + y;
		}
		console.log(add([[1, 2], [3, 4]].map(([a, b]) => a - b)));
	}
}