$(document).ready(function () {
    //After the DOM is ready everything below here will run// 

    var userInput;
    var userPassword;
    var formArray = [];
    console.log(userInput);
    console.log(userPassword);
    console.log(formArray);
    //Variables that can be use globally//

    $('#formSubmit').on('click', function () {
        event.preventDefault();
        userInput = $('#InputUser').val().trim();
        userPassword = $('#InputPassword').val().trim();
        formArray.push(userInput, userPassword);
        $('#InputUser').val("");
        $('#InputPassword').val("");

        if (userInput !== '' && userPassword !== '') {
            $(location).attr('href', './user.html');
        } else {
            alert('Both USER and PASSWORD fields are required')
        }
        console.log(userInput);
        console.log(userPassword);
        console.log(formArray);

    });
    //When the submit button is clicked this function will store the user and password into an array//



});

var credentials = {
    user: userInput,
    password: userPassword
}

module.exports = credentials