function Employee(id, name, salary){
	//this -> new object
	this.id = id;
	this.name = name;
	this.salary = salary;

	this.display = function(){
		console.log(this.id, this.name, this.salary)
	}
	//this -> returned by default
}

function Employee(id, name, salary){
	//this -> new object
	this.id = id;
	this.name = name;
	this.salary = salary;
	//this -> returned by default
}

Employee.prototype.display = function(){
	console.log(this.id, this.name, this.salary)
}

function Spinner(){
	var counter = 0;

	this.up = function(){
		return ++counter;
	};

	this.down = function(){
		return --counter;
	};
}

function Spinner(){
	var this.__counter__ = 0;
}

Spinner.prototype.up = function(){
	return ++this.__counter__;
};

Spinner.prototype.down = function(){
	return --this.__counter__;
};




















