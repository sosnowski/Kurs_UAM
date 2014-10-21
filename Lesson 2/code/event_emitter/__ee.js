(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		var listenerData, me = this;
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}
		listenerData = {
			fn: listener,
			ctx: context || window
		};

		this.listeners[eventName].push(listenerData);

		return function () {
			var ind = me.listeners[eventName].indexOf(listenerData);
			if (ind > -1) {
				me.listeners[eventName].splice(ind, 1);
			}
		};
	};

	EE.prototype.emit = function (eventName) {
		var args, listeners = this.listeners[eventName] || [];
		args = Array.prototype.slice.call(arguments, 1);
		listeners.forEach(function (listData) {
			listData.fn.apply(listData.ctx, args);
		});
	};

	global.UAM.EventEmitter = EE;

}(window));
