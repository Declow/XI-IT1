$(document).ready(function () {

    $("#signUp").click(function () {
        var pw = $("#pwInput").val();
        var pwConfirm = $("#pwInput-confirm").val();
        var tellUser = $("#tellUser");

        if (pw != pwConfirm) {
            console.log("Passwords don't match");
            tellUser.text("Passwors don't match");
        } else if (pw.length < 6) {
            console.log("Password needs to be greater than 6");
            tellUser.text("The password needs to be grater than 6");
        } else {
            console.log("You can sign in!");
        }
    });
});