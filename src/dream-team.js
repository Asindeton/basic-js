module.exports = function createDreamTeam(Array) {
	if (typeof Array !== 'object'|| Array === null){return false;} else if(Array.length === undefined){return false;}
	let answer = [];
	Array.map(function (e){
		if(typeof e == 'string' && /^[a-zA-Z]/.test(e.trim().split('')[0])){
			let test = e.trim();
			answer.push(test.split('')[0])
		}
	});

	return answer.map(e => e.toLocaleUpperCase()).sort().join('');
};