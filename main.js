
function checkPass() {

    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('confirmPassword');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if (pass1.value == pass2.value) {
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    } else {
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}

// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (regMail.test(email) == false) {
        document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
    }
}

function myMap() {

    var myLatlng = new google.maps.LatLng(56.9509698, 24.1004137);
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 15,
        center: new google.maps.LatLng(56.9509698, 24.1004137)
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });
    marker.setMap(map);
};


$(document).ready(function(){

    $('#send-chat-message').click(function(){
        var username = $('#chat-username-input').val();
        // document.querySelector('#chat-username-input').value // <-- vanilla JS
        var comment = $('#chat-message-input').val();
        // document.querySelector('#chat-message-input').value // <-- vanilla JS

        var date = new Date('2017-12-24');
        var commentElement = $('<div class="chat-message">' +
            '<h4>' + username + '<em>' + date + '</em></h4>' +
            '<p>' +
            comment +
             '</p>' +
         '</div>');
        $('#chat-window').append(commentElement);
        $('#chat-username-input').val('');        
        $('#chat-message-input').val('');
    });
});