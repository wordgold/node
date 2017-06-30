module.exports = class {
	constructor({ name = "you" } = {}, ...items) {
		this.name = name;
		let { 0: a, [name.length - 1]: b } = name;
		[a, b] = [b, a];
		let s = `
<ul>${[a, b].map(c => `
<li>${c}</li>`).join("")}
</ul>`;

		console.log([a, b, ...items]);
		console.log(`${process.cwd()} fuck ${s}!`);
		console.log(new Array(3).fill('<li></li>').join(""));
		console.log(Array.from('𠮷123test测试', x => x.codePointAt()).copyWithin(1, 3, 4).join("-"));
	}
	read(file) {
		var fs = require("fs");
		fs.stat(file, function (err, stat) {
			if (err) {
				console.log(err);
			} else {
				// 是否是文件:
				console.log('isFile: ' + stat.isFile());
				// 是否是目录:
				console.log('isDirectory: ' + stat.isDirectory());
				if (stat.isFile()) {
					// 文件大小:
					console.log('size: ' + stat.size);
					// 创建时间, Date对象:
					console.log('birth time: ' + stat.birthtime);
					// 修改时间, Date对象:
					console.log('modified time: ' + stat.mtime);
				}
			}
		});
	}
}