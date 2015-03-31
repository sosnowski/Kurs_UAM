UAM.utils = {
	inherits: function (Parent, Child) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	}
};
