//cache is private
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



//cache can be public


function isPrime(n){
	if (!isPrime.cache){
		isPrime.cache = {};
	}
	if (typeof isPrime.cache[n] !== 'undefined')
		return isPrime.cache[n];

	console.log('processing ', n);
	isPrime.cache[n] = true;
	for(var index = 2, count = (n/2); index < count; index++){
		if (n % index === 0){
			isPrime.cache[n] = false;
			break;
		}
	}
	return isPrime.cache[n];
}