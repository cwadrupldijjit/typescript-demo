// Bad code is commented out

class MeObj {
	// constructor function for new objects
	constructor(name: string) {
		this.name = name;
	};
	
	// properties on that object
	name: string;
	age: number;
	setName(newName: string) {
		this.name = newName;
	};
};




// var me = new MeObj(23);	// doesn't like me passing a number in instead of a string


var me = new MeObj('Sam Skeen');





function setName_me(newName:string) {
	me.name = newName;
}

// me.setName(5);	// doesn't like me passing a number in instead of a string

// setName_me({		// doesn't like me passing in an object instead of a string
// 	name: 'Jar Jar'
// });

me.setName('R2-D2');
setName_me('C-3PO');




function replaceMe(newPerson: MeObj) {
	me = newPerson;
}




// replaceMe('Dr. Dingelhopper');	// Doesn't like the fact that I'm trying to pass in 
									// a string instead of an object that matches the criteria for MeObj


let Superman = new MeObj('Clark Kent');

replaceMe(Superman);


replaceMe({
	name: 'Ginger Snapps',
	age: 35,
	setName(newName: string) {
		this.name = newName;
	}
});