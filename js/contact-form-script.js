(function($) {
    $("#contact_form").validate({
      submitHandler: function(form, event) {
        // Prevent any default ajax submission or backend sending
        event.preventDefault();
        
        var name = $(form).find('input[name="form_name"]').val();
        var email = $(form).find('input[name="form_email"]').val();
        var subject = $(form).find('input[name="form_subject"]').val();
        var phone = $(form).find('input[name="form_phone"]').val();
        var message = $(form).find('textarea[name="form_message"]').val();
        
        // Format the email body neatly
        var mailtoSubject = encodeURIComponent(subject ? subject : "New Inquiry from " + name);
        var mailtoBody = "Name: " + name + "\\n" +
                         "Email: " + email + "\\n" +
                         "Phone: " + phone + "\\n\\n" +
                         "Message:\\n" + message;
                         
        // Construct the mailto URL
        var mailtoLink = "mailto:flora.landscapedevelopers@gmail.com?subject=" + mailtoSubject + "&body=" + encodeURIComponent(mailtoBody);
        
        // Provide user feedback that it's opening their mail client
        var form_btn = $(form).find('button[type="submit"]');
        var form_btn_old_msg = form_btn.html();
        form_btn.html('<span class="btn-title">Opening Mail Client...</span>');
        
        // Trigger the mail client popup
        window.location.href = mailtoLink;
        
        // Reset the button shortly after
        setTimeout(function() {
            form_btn.html(form_btn_old_msg);
            $(form).find('.form-control').val('');
        }, 3000);
      }
    });
})(jQuery);