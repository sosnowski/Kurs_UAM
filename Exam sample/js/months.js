window.addEventListener('DOMContentLoaded', function () {
    
    var months = [
        "styczeń",
        "luty",
        "marzec",
        "kwiecień",
        "maj",
        "czerwiec",
        "lipiec",
        "sierpień",
        "wrzesień",
        "październik",
        "listopad",
        "grudzień"
    ];
    
    function addMonthToSelect(select, month) {
        var option = document.createElement('option');
        option.text = month;
        select.appendChild(option);
    }
    
    var monthsSelect = document.querySelector('#months');
    var monthsForCheckSelect = document.querySelector('#monthsForCheck');
    months.forEach(function(month) {
        addMonthToSelect(monthsSelect, month);
        addMonthToSelect(monthsForCheckSelect, month);
    });
});
