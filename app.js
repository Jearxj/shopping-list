$(document).ready(function () {
    $('.text-board').on('keypress', function(event) {
        console.log("this is working");
        var item = $('input').val();
        if (event.which == 13) {
            console.log("enter key");
            event.preventDefault();
            if (item.length >= 1) {
                console.log("true");
                $('.items').append('<p>'+item+'</p>');
                $('input').val('');
            } 
            else {
                console.log("false");
                alert("Please type in an item!");
            }
        }
    })
});
