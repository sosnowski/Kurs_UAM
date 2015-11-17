/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getDivision button'),
        span = document.querySelector('#getDivision span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/division', function (result) {
            clearAllSpans();
            span.textContent = 'Division is ' + result;
        });
    });
});
