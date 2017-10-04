var products = [
	{id : 6, name : 'Pen', cost : 40, units : 50, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 30, category : 'grocery'},
	{id : 8, name : 'Den', cost : 30, units : 70, category : 'stationary'},
	{id : 7, name : 'Ten', cost : 80, units : 60, category : 'grocery'},
	{id : 4, name : 'Zen', cost : 50, units : 40, category : 'stationary'},
];

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}
//Sort
//Filter
//GroupBy

describe('Default List', function(){
	console.table(products);
});

describe('Sort', function(){
	describe('Default Sorting - [Products by id]', function(){
		function sortProductsById(){

		}
		sortProductsById();
		console.table(products);
	});

	/*describe('Any list by any attribute', function(){
		describe('Products by cost', function(){
			//sort(products, .....);
			console.table(products);
		});

		describe('Products by units', function(){
			//sort(products, .....);
			console.table(products);
		});
	});*/
});

/*describe('Filter', function(){
	describe('All stationary products', function(){
		//filter()
		console.table(products)
	});
});*/















