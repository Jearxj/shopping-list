$(document).ready(function () {
    //
    $('#form-one').on('submit', function(event) {
        event.preventDefault();
    })
    $('.text-board').on('keyup', function(event) {
        console.log("this is working");
        var item = $('input').val();
        if (event.which === 13) {
            console.log("enter key");
            event.preventDefault();
            if (item.length >= 1) {
                console.log("true");
                $('.items').append('<p></p>');
                $('input').val('');
            } else {
                console.log("false");
                alert("Please type in an item!");
            }
        } else {
            $('.items p:last').text(item);
        }
    })
    $('.items').on('click', 'p', function() {
        console.log('crossout');
        $(this).toggleClass('crossout');
    })
    $('#knob-left').click(function() {
        event.preventDefault();
        console.log('knob-one clicked');
        $('.items').on('click', 'p', function() {
            $(this).toggle();
        }) 
    })
    .click(function() {
        $('#knob-left').toggleClass('glow');
    })
    $('#knob-right').click(function() {
        $('.board').effect('shake');
        $('.items').empty();
        $('.items').append('<p></p>');
    });
});
