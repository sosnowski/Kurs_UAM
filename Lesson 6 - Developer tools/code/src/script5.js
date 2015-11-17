/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getSum button'),
        span = document.querySelector('#getSum span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/sum', function (result) {
            clearAllSpans();
            span.textContent = 'Sum is ' + result;
        });
    });
});
