module.exports = class {
	constructor() {
		console.log("\u{41}\u{42}\u{43}");
		let s = `王𠮷小𠮷明`,
			a = [];
		for (let c of s.repeat(2)) {
			a.push(String.fromCodePoint(c.codePointAt(0)));
		}
		console.log(a.join('-').padStart(30, '1234567890').padEnd(32, '0'));
		console.log(s);
		console.log`王𠮷小𠮷明`;
		console.log([1,2,3,4,5].map(function(n){
			return `<li class="${n % 2 ? "odd" : "even"}">${n % 2 ? 1 : 2}</li>`;
		}).join(''));
	}
}