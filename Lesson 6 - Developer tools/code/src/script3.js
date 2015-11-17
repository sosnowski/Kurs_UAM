/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('#addNew input'),
        button = document.querySelector('#addNew button'),
        span = document.querySelector('#addNew span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('post', '/numbers', +input.value, function () {
            clearAllSpans();
        });
    });
});
