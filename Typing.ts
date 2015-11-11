class MeObj {
	constructor(name: string) {
		this.name = name;
	};
	name: string;
	setName(newName: string) {
		this.name = newName;
	};
};





let me = new MeObj('Sam Skeen');





function setName_me(newName:string) {
	me.name = newName;
}

me.setName(5);
setName_me({
	name: 'Herbert'
});

me.setName('R2-D2');
setName_me('C-3PO');




function replaceMe(newPerson: MeObj) {
	me = newPerson;
}




replaceMe('Dr. Dingelhopper');


let Superman = new MeObj('Clark Kent');

replaceMe(Superman);

replaceMe({
	name: 'Ginger Snapps',
	setName(newName: string) {
		this.name = newName;
	}
});