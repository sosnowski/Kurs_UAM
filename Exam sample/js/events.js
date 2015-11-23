window.addEventListener('DOMContentLoaded', function () {
    
    var birthdays = [];
    
    var addBirthdayBtn = document.querySelector('#addBirthday');
    var checkBirthdayBtn = document.querySelector('#checkBirthday');
    var birthdayList = document.querySelector('#birthdayList');
    var birthdayCheckList = document.querySelector('#birthdayCheckList');
    
    addBirthdayBtn.addEventListener('click', function() {
        var newBirthday = readBirthday();
        var template = getBirthdayTemplate(newBirthday);
        var birthdayDomElement = document.createElement('li');
        birthdays.push(newBirthday);
        birthdayDomElement.innerHTML = template;
        birthdayList.appendChild(birthdayDomElement);
        
        var removeBtn = birthdayDomElement.querySelector('.birthday-remove');
        removeBtn.addEventListener('click', function() {
            var index = birthdays.indexOf(newBirthday);
            if (index >= 0) {
                birthdays.splice(index, 1);
            }
            
            birthdayList.removeChild(birthdayDomElement);
        });
    });
    
    checkBirthdayBtn.addEventListener('click', function() {
        var monthToCheck = readCheckBirthdayMonth();
        while (birthdayCheckList.hasChildNodes()) {
            birthdayCheckList.removeChild(birthdayCheckList.lastChild);
        }
        birthdays.forEach(function(birthday) {
            var liElement;
            if (birthday.month === monthToCheck) {
                liElement = document.createElement('li');
                liElement.innerText = birthday.firstName + " " + birthday.lastName;
                birthdayCheckList.appendChild(liElement);
            }
        });
    });
});
