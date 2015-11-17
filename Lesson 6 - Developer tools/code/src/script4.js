/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getStored button'),
        span = document.querySelector('#getStored span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers', function (numbers) {
            clearAllSpans();
            span.textContent = 'Numbers are ' + numbers;
        });
    });
});
