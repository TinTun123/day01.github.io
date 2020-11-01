
$(document).ready(function() {
    $('#contact form').on('submit', function(e) {
        e.preventDefault();
        
        let $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('#button[type=submit]');

        if ($email.val().indexOf('@') == -1) {
            vaca = $email.addClass('is-invalid');
        } else {
            $form.find('#contact-email').addClass('is-valid').removeClass('is-invalid');
            $button.prop('disabled', 'disable');
            $button.after('<span>Message sent. We will contact you soon.</span>');
        }
    });
});

