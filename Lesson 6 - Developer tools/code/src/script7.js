/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getMultiplication button'),
        span = document.querySelector('#getMultiplication span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/multiplication', function (result) {
            clearAllSpans();
            span.textContent = 'Multiplication is ' + result;
        });
    });
});
