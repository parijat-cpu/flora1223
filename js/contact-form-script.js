(function($) {
    $("#contact_form").validate({
      submitHandler: function(form) {
        
        var form_btn = $(form).find('button[type="submit"]');
        var form_btn_old_msg = form_btn.html();
        form_btn.html('<span class="btn-title">Sending...</span>');
        
        // Remove previous messages
        $('#form-response-msg').remove();
        
        // Prepare data for FormSubmit
        var formData = new FormData(form);
        
        // Setup neat subject line
        var name = $(form).find('input[name="form_name"]').val();
        formData.append("_subject", "New Inquiry from " + name);
        
        // FormSubmit AJAX Submission
        $.ajax({
            url: "https://formsubmit.co/ajax/flora.landscapedevelopers@gmail.com",
            method: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // FormSubmit responds with 200 OK on success
                var successHTML = '<div id="form-response-msg" style="margin-top: 15px; color: #28a745; font-size: 16px; font-weight: bold; text-align: center; padding: 10px; background: #e8f5e9; border-radius: 5px;">Your query has been received! We will contact you soon.</div>';
                $(form).append(successHTML);
                // Clear the form
                $(form).find('.form-control').val('');
            },
            error: function(jqXHR) {
                var errorMessage = "Network error. Please try again later.";
                
                if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                    errorMessage = jqXHR.responseJSON.message;
                } else if (jqXHR.status === 401) {
                    errorMessage = "Action Required: The site owner needs to click 'Activate Form' in the email sent by FormSubmit to flora.landscapedevelopers@gmail.com.";
                }

                var errorHTML = '<div id="form-response-msg" style="margin-top: 15px; color: #dc3545; font-size: 14px; text-align: center; padding: 10px; background: #ffebee; border-radius: 5px;">' + errorMessage + '</div>';
                $(form).append(errorHTML);
            },
            complete: function() {
                // Reset button text
                form_btn.html(form_btn_old_msg);
                
                // Hide success message after 6 seconds
                setTimeout(function() {
                    $('#form-response-msg').fadeOut('slow', function() { $(this).remove(); });
                }, 6000);
            }
        });
      }
    });
})(jQuery);