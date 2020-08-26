const constructArr = ()=>{
	const arr= Array.prototype.slice.call(arguments);
	arr.push('the billiards room?');
	return arr.join('.');
};

const x=constructArr('was','it','in');

console.log(x);
