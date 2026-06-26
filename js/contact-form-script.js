(function($) {
    $("#contact_form").validate({
      submitHandler: function(form, event) {
        event.preventDefault();
        
        var name = $(form).find('input[name="form_name"]').val();
        var email = $(form).find('input[name="form_email"]').val();
        var subject = $(form).find('input[name="form_subject"]').val();
        var phone = $(form).find('input[name="form_phone"]').val();
        var message = $(form).find('textarea[name="form_message"]').val();
        
        var mailtoSubject = encodeURIComponent(subject ? subject : "New Inquiry from " + name);
        var mailtoBody = "Name: " + name + "\\n" +
                         "Email: " + email + "\\n" +
                         "Phone: " + phone + "\\n\\n" +
                         "Message:\\n" + message;
                         
        var mailtoLink = "mailto:flora.landscapedevelopers@gmail.com?subject=" + mailtoSubject + "&body=" + encodeURIComponent(mailtoBody);
        
        var form_btn = $(form).find('button[type="submit"]');
        var form_btn_old_msg = form_btn.html();
        form_btn.html('<span class="btn-title">Opening Mail Client...</span>');
        
        // Remove any previous fallback message
        $('#mailto-fallback').remove();
        
        // Bulletproof way to open mailto link
        var a = document.createElement('a');
        a.href = mailtoLink;
        a.target = '_top'; // Ensure it opens in the current tab/window context
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Add a fallback message in case the user doesn't have a default mail app configured
        var fallbackHTML = '<div id="mailto-fallback" style="margin-top: 15px; color: #1e3d22; font-size: 14px;">If your mail app did not open automatically, please email us directly at <strong>flora.landscapedevelopers@gmail.com</strong></div>';
        $(form).append(fallbackHTML);
        
        setTimeout(function() {
            form_btn.html(form_btn_old_msg);
            $(form).find('.form-control').val('');
        }, 3000);
      }
    });
})(jQuery);