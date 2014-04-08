$(document).ready(function () {
    var is_text_in = false;
    $('.text-board').on('keypress', function(event) {
        console.log("this is working");
        var item = $(this).val();
        if (event.which == 13) {
            console.log("enter key");
            event.preventDefault();
            if (is_text_in = true) {
                console.log("true");
                $('.text-board').append(item);
            } 
                // if there is no text in the input
            else {
                console.log("false");
                alert("Please type in an item!");
            }
        }
    })
});

//**the computer is saying that there is no text in the input 