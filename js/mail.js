
$(document).ready(function() {
    $('#contact form').on('submit', function(e) {
        e.preventDefault();
        
        let $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('#button[type=submit]');

        console.log($form);
        console.log($email);
        console.log($email.val().indexOf('@'));

        if ($email.val().indexOf('@') == -1) {
            vaca = $email.closest('form-group')
            $email.closest('.form-group').addClass('has-error');
        } else {
            $form.find('.form-group').addClass('hassuccess').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>Message sent. We will contact you soon.</span>');
        }
    });
});