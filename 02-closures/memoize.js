var isPrime = (function(){
	var cache = {};

	function isPrime(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];

		console.log('processing ', n);
		cache[n] = true;
		for(var index = 2, count = (n/2); index < count; index++){
			if (n % index === 0){
				cache[n] = false;
				break;
			}
		}
		return cache[n];
	}
	return isPrime;
})();

var isOddOrEven = (function(){
	var cache = {};

	function isOddOrEven(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];

		console.log('processing ', n);
		cache[n] = n % 2 === 0 ? 'even' : 'odd';
		return cache[n];
	}
	return isOddOrEven;
})();

function memoize(algoFn){
	var cache = {};

	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = algoFn(n);
		return cache[n];
	}
	
}

var isOddOrEven = memoize(function(n){
	console.log('processing ', n);
	return n % 2 === 0 ? 'even' : 'odd';
})

var isPrime = memoize(function(n){
	console.log('processing ', n);
	for(var index = 2, count = (n/2); index < count; index++){
		if (n % index === 0){
			return false;
		}
	}
	return true;
});




