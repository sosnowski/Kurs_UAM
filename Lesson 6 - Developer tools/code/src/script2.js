/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getToday button'),
        span = document.querySelector('#getToday span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/today', function (today) {
            clearAllSpans();
            span.textContent = 'Today is ' + today;
        });
    });
});
