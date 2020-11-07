"use strict";

$(document).ready(function() {
    let $charcount, maxCharCount;

    $charcount = $('#tweet-modal .char-count');
    maxCharCount = parseInt($charcount.data('max'), 10);

    $('#tweet-modal textarea').on('keyup', function(e) {
        let tweetLength = $(e.currentTarget).val().length;

        $charcount.html(maxCharCount - tweetLength);
    });
    
    $('[data-toggle="tooltip"]').tooltip();

    let popoverContentTemplate = ' ' + '<img src="image/breed.jpg" class="rounded-circle img-rounded" width="50" height="40">' +         
    '<div class="info">' +             
    '<strong>Dog Breeds</strong>' +             
    '<a href="#" class="btn btn-secondary btn-sm">' +                 
    '<span class="fas fa-plus" ariahidden="true"></span>' +                 
    'Follow' +             
    '</a>' +         
    '</div>';
                            

    $('[data-toggle="popover"]').popover({
        placement: 'bottom',
        content: function() {
            return popoverContentTemplate
        },
        html: true

    });

    $('[data-toggle="popover"]').on('show.bs.popover', function() {
        let $icon = $(this).find('span.fas');

        $icon.removeClass('fa-plus').addClass('fa-check-circle');

        $(this).append('ing');
    })

    
});