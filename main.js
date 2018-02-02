$('#registration-form').submit(function (event) {
    var hasErrors = false;
    $('.errorText').remove();

    var $userName = $('#registration-form input[id="username" ]');
    if ($userName.val() == '') {
        hasError = true;
        var error = '<div class="errorText">Field <b> Username</b> is empty</div>';
        $userName.parent().append(error);
    }
    var emailElement = 'input[id="email"]';
    var $email = $(this).find(emailElement);
    if ($email.val() == '') {
        hasError = true;
        var error2 = '<div class="errorText">Field <b> Email</b> is empty</div>';
        $email.parent().append(error2);
    }
    if (hasError == true) {
        event.preventDefault();

    }
});