$('#contactThankYou').hide(0);
$('#contactError').hide(0);
var contactFormSubmit = window.location.origin;


// $('.contactformbyclass').on('submit', function(event) {
// 	event.preventDefault();
// 	$('#contactThankYou').hide(0);
// 	$('#contactError').hide(0);


// 	$.post('contact_submit.php', $(this).serialize(), function(data, textStatus, xhr) {
// 	if (data == 1) {
// 			$('#contactThankYou').text('Thank you for getting in touch!').fadeIn();

// 			if( window.location.href.indexOf('paid') !== -1  ) {

// 				window.google_trackConversion({
// 				    google_conversion_id: 871513331,
// 					google_conversion_language : "en",
// 					google_conversion_format : "3",
// 					google_conversion_color : "ffffff",
// 					google_conversion_label : "2s1NCN2V7WoQ8_nInwM",
// 					google_remarketing_only : false
// 				});

// 			}

// 		}else{
// 			$('#contactError').text(data).fadeIn();
// 		}



// 	});

// });


//class is using for multiple form
$('.contactFormClass').on('submit', function(event) {
    var that = this;
    event.preventDefault();

    $('#contactThankYou').hide(0);
    $('#contactError').hide(0);
    $.post(contactFormSubmit + '/contact_submit', $(this).serialize(), function(data, textStatus, xhr) {
        //data = 1;
        // if (data == 1)
        if (data == 2) {
            window.location.reload();
        } else if (data == 3) {
            $('#errorcapcha').show();
        } else {
            // $('#contactThankYou').text('Thank you for getting in touch!').fadeIn();
            /* window.location.replace("/thank-you"); */
            window.location.replace(contactFormSubmit + '/thank-you')
            $(that).find("input, textarea, select").val("");


        }
        // 	else{
        // 		$('#contactError').text(data).fadeIn();
        // }

    });

});


//third form

//class is using for multiple form
$('#requestquote').on('submit', function(event) {
    event.preventDefault();
    var hasError = validateContactForm("#requestquote");
    if (hasError) {
        return;
    } else {
        var that = this;
        $.post(contactFormSubmit + '/requestquote', $(this).serialize(), function(data, textStatus, xhr) {
            window.location.replace(contactFormSubmit + '/thank-you');
        });
    }
});

// NOT IN WORK
function validateContactFormValidateJS() {
    const validate = new window.JustValidate('#requestcontact');

    validate
        .addField('#name', [{
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 40,
            },
            {
                rule: 'customRegexp',
                value: /^[A-Za-z]+$/,
                errorMessage: 'Only alphabets allowed!'
            },
        ])
        .addField('#email', [{
                rule: 'required',
                errorMessage: 'Email is required',
            },
            {
                rule: 'email',
                errorMessage: 'Email is invalid!',
            },
        ]).onSuccess((event) => {
            console.log('Validation passes and form submitted', event);
        });

    console.log("Validation result ", validate);
}

function validateContactForm(formID) {
    $("p.help-block").text('');

    var name = $(formID + " #name").val().trim();
    var email = $(formID + " #email").val();
    var interest = $(formID + " #interest").val();
    var country = $(formID + " #country").val();
    var phone = $(formID + " #phone").val();
    var message = $(formID + " #message").val().trim();
    var recaptcha = $(formID + " .g-recaptcha-response").val();

    var error = false;

    var errMsg = '';
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (name.length < 3 || name.length > 40 || !nameRegex.test(name)) {
        if (name.length < 3) {
            errMsg = "Name must be atleast 3 characters long";
        } else if (name.length > 40) {
            errMsg = "Name must not be greater than 40 characters";
        } else {
            errMsg = "Only alphabets are allowed.";
        }
        $(formID + " #name").siblings('p').text(errMsg);
        error = true;
    }

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.length > 60 || !emailRegex.test(email)) {
        errMsg = '';
        if (email.length > 60) {
            errMsg = "Name must not be greater than 60 characters";
        } else {
            errMsg = "Please enter a valid email address.";
        }
        $(formID + " #email").siblings('p').text(errMsg);
        error = true;
    }

    if (!interest || (interest && interest.trim().length == 0)) {
        $(formID + " #interest").siblings('p').text("Please select the project type");
        error = true;
    }

    if (!country || (country && country.trim().length == 0)) {
        $(formID + " #country").siblings('p').text("Please select the country");
        error = true;
    }

    var phoneRegex = /^[\d]+$/;
    if (phone.length < 10 || phone.length > 15 || !phoneRegex.test(phone)) {
        errMsg = '';
        if (phone.length < 10) {
            errMsg = "Phone number must be atleast 10 characters long";
        } else if (phone.length > 15) {
            errMsg = "Phone number must not be greater than 15 characters";
        } else {
            errMsg = "Only numbers are allowed.";
        }
        $(formID + " #phone").siblings('p').text(errMsg);
        error = true;
    }

    if (message.length == 0) {
        errMsg = '';
        $(formID + " #message").siblings('p').text("Message field cannot be empty");
        error = true;
    }

    if (!recaptcha || recaptcha.length == '') {
        errMsg = '';
        $(formID + " .g-recaptcha").siblings('p').text("Captcha is not selected");
        // $(".captcha-error").text("Captcha is not selected");
        error = true;
    }

    return error;
}


/**
 *  When CONTACT US form is submitted
 */
$("#requestcontact").on('submit', function(event) {
    event.preventDefault();

    var hasError = validateContactForm("#requestcontact");
    if (hasError) {
        return;
    } else {
        var that = this;
        $.post(contactFormSubmit + '/contact_submit', $(this).serialize(), function(data, textStatus, xhr) {
            window.location.replace(contactFormSubmit + '/thank-you');
        });
    }
});

//class is using for multiple form
/**
 *  When GET A QUOTE form is submitted
 */
$('#requestquote1').on('submit', function(event) {
    event.preventDefault();

    var hasError = validateContactForm("#requestquote1");
    if (hasError) {
        return;
    } else {
        var that = this;
        $.post(contactFormSubmit + '/contact_submit', $(this).serialize(), function(data, textStatus, xhr) {
            // alert('Yes it Worked');
            window.location.replace(contactFormSubmit + '/thank-you');
        });
    }
});