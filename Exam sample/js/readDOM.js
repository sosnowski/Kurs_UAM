function readBirthday() {
    var firstNameInput = document.querySelector('#firstName');
    var lastNameInput = document.querySelector('#lastName');
    var dayInput = document.querySelector('#day');
    var monthSelect = document.querySelector('#months');
    
    return {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        day: dayInput.value,
        month: monthSelect.value
    };
}

function readCheckBirthdayMonth() {
    var monthCheckSelect = document.querySelector('#monthsForCheck');
    return monthCheckSelect.value;
}