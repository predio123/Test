/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
    // dislike callback
    onDislike: function (item) {
        // set the status text
        $('#status').html('Dislike image ' + (item.index() + 1));
    },
    // like callback
    onLike: function (item) {
        // set the status text
        $('#status').html('Like image ' + (item.index() + 1));
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function (e) {
    e.preventDefault();
    $("#tinderslide").jTinder($(this).attr('class'));
});

//Refresh button
$('#trynew').click(function () {
    location.reload();
});

$(function () {
    jQuery("#pa6").flip({
        trigger: 'manual'
    });
    jQuery("#pa5").flip({
        trigger: 'manual'
    });
    jQuery("#pa4").flip({
        trigger: 'manual'
    });
    jQuery("#pa3").flip({
        trigger: 'manual'
    });
    jQuery("#pa2").flip({
        trigger: 'manual'
    });
    jQuery("#pa1").flip({
        trigger: 'manual'
    });
    console.log('ready');
});

function changeview(place) {
    event.preventDefault();
        $('.like').hide();
    $('.dislike').hide();
    $('#'+place).flip('toggle');
            $('.like').show();
    $('.dislike').show();

}

$("#start").delay(3000).fadeOut(1000);
