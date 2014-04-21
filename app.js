$(document).ready(function () {
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
    })
    $('.items').on('click', 'p', function() {
        console.log('crossout');
        $(this).toggleClass('crossout');
    })
    $('#knob-one').click(function() {
        console.log('knob-one clicked');
        $('.items').on('click', 'p', function() {
            $(this).toggle();
        }) 
    })
    $('#knob-two').click(function() {
        $( '.board' ).effect( 'shake' );
        $('.items').empty('p');
    })
});
