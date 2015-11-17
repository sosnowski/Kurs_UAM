/* globals $ */
function makeQuery(method, url, optionalData, callback) {
    if (typeof optionalData === 'function') {
        callback = optionalData;
        optionalData = null;
    }

    $.ajax({
        method: method,
        url: url,
        contentType: 'text/plain',
        data: optionalData + ''
    }).done(callback).fail(function () {
        console.error(arguments);
        alert('error');
    });
}

function clearAllSpans() {
    $('span').text('');
}
