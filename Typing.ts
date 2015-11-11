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




// var me = new MeObj(23);


var me = new MeObj('Sam Skeen');





function setName_me(newName:string) {
	me.name = newName;
}

// me.setName(5);
// setName_me({
// 	name: 'Herbert'
// });

me.setName('R2-D2');
setName_me('C-3PO');




function replaceMe(newPerson: MeObj) {
	me = newPerson;
}




// replaceMe('Dr. Dingelhopper');


let Superman = new MeObj('Clark Kent');

replaceMe(Superman);


replaceMe({
	name: 'Ginger Snapps',
	age: 35,
	setName(newName: string) {
		this.name = newName;
	}
});