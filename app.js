$(document).ready(function () {
    $('#knob-two').click(function() {
    $( '.board' ).effect( 'shake' );
        $('.items').empty('p');
    });
    $('.text-board').on('keypress', function(event) {
        console.log("this is working");
        var item = $('input').val();
        if (event.keyCode === 13) {
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
        } else {
            $('.items p:first').text(item);
        }
    });
    $('.items').on('click', 'p', function() {
        console.log('crossout');
        $(this).toggleClass('crossout');
    })
    .on('dblclick', 'p', function() {
        $(this).remove();
    });
});
