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
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sortProductsById();
		console.table(products);
	});

	function sort(list, comparer){
		var comparerFn = undefined;
		if (typeof comparer === 'function')
			comparerFn = comparer;
		if (typeof comparer === 'string'){
			comparerFn = function(item1, item2){
				if (item1[comparer] < item2[comparer]) return -1;
				if (item1[comparer] > item2[comparer]) return 1;
				return 0;
			}
		}
		if (!comparerFn) return;
		for(var i=0; i < list.length-1; i++)
			for(var j=i+1; j < list.length; j++)
				if (comparerFn(list[i], list[j]) > 0){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
	}
	describe('Any list by any attribute', function(){
		/*function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}*/
		describe('Products by cost', function(){
			sort(products, 'cost');
			console.table(products);
		});

		describe('Products by units', function(){
			sort(products, 'units');
			console.table(products);
		});
	});

	describe('Any list by any comparer', function(){
		/*function sort(list, comparer){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparer(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}*/
		describe('Products by value [value=cost * units]', function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0;
			}
			sort(products, productComparerByValue);
			console.table(products);
		});

	});
});

/*describe('Filter', function(){
	describe('All stationary products', function(){
		//filter()
		console.table(products)
	});
});*/















