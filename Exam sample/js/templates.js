function getBirthdayTemplate(birthdayObj) {
    return  "<div class='birthday-data'>" +
                "<div class='birthday-row'>" + 
                    "Osoba: " + birthdayObj.firstName + " " + birthdayObj.lastName +
                "</div>" +
                "<div class='birthday-row'>" +
                    "Urodziny: " + birthdayObj.day + " " + birthdayObj.month +
                "</div>" +
            "</div>" + 
            "<button class='birthday-remove'>Usuń</div>";
}