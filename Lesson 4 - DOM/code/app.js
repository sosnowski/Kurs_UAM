window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...

    var weightSpan = document.querySelector('.weight span'),
        weightInput = document.querySelector('.weight input'),
        heightSpan = document.querySelector('.height span'),
        heightInput = document.querySelector('.height input'),
        bmiSpan = document.querySelector('h1 span');

    function updateBmi() {
        var weight = weightInput.value,
            height = (+heightSpan.textContent) / 100;

        var result = weight / Math.pow(height, 2);

        bmiSpan.textContent = result.toFixed(2);

        bmiSpan.className = '';
        if (result < 17 || result > 30) {
            bmiSpan.classList.add('bad');
        } else if (result < 19 || result > 25) {
            bmiSpan.classList.add('medium');
        } else {
            bmiSpan.classList.add('ok');
        }
    }

    function updateWeight(event) {
        weightSpan.textContent = weightInput.value;

        updateBmi();
    }

    function updateHeight(event) {
        heightSpan.textContent = heightInput.value;

        updateBmi();
    }

    updateBmi();

    weightInput.addEventListener('input', updateWeight);
    heightInput.addEventListener('input', updateHeight);
});
