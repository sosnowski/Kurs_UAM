(function () {

	var head, code, style, applyStyles, parseStyles;

	head = document.querySelector('head');
	code = document.querySelector('.code');
	style = document.createElement('style');


	applyStyles = function (evt) {
		style.innerHTML = parseStyles(evt.target.textContent);
	};

	parseStyles = function (code) {
		return code.replace(/\s+/g, ' ');
	};

	style.setAttribute('type', 'text/css');
	style.innerHTML = parseStyles(code.textContent);

	code.addEventListener('keyup', _.throttle(applyStyles, 500));

	head.appendChild(style);

}());