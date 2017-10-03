function add(){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n)
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}

//When a function is invoked as a method of obj
// this -> obj

//When a function is invoked as a function
// this -> global scope (window)