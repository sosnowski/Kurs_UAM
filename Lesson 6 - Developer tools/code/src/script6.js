/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getDiff button'),
        span = document.querySelector('#getDiff span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/difference', function (result) {
            clearAllSpans();
            span.textContent = 'Difference is ' + result;
        });
    });
});
