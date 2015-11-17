/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#clearAll button'),
        span = document.querySelector('#clearAll span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('delete', '/numbers', function (result) {
            clearAllSpans();
        });
    });
});
