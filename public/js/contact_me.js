// Contact Form Scripts

$(function() {

    //     $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    //         preventSubmit: true,
    //         submitError: function($form, event, errors) {
    //             // additional error messages or events
    //         },
    //         submitSuccess: function($form, event) {
    //             event.preventDefault(); // prevent default submit behaviour
    //             // get values from FORM
    //             var name = $("input#name").val();
    //             var email = $("input#email").val();
    //             var phone = $("input#phone").val();
    //             var message = $("textarea#message").val();
    //             var firstName = name; // For Success/Failure Message
    //             // Check for white space in name for Success/Fail message
    //             if (firstName.indexOf(' ') >= 0) {
    //                 firstName = name.split(' ').slice(0, -1).join(' ');
    //             }
    //             $.ajax({
    //                 url: "././mail/contact_me.php",
    //                 type: "POST",
    //                 data: {
    //                     name: name,
    //                     phone: phone,
    //                     email: email,
    //                     message: message
    //                 },
    //                 cache: false,
    //                 success: function() {
    //                     // Success message
    //                     $('#success').html("<div class='alert alert-success'>");
    //                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                         .append("</button>");
    //                     $('#success > .alert-success')
    //                         .append("<strong>Your message has been sent. </strong>");
    //                     $('#success > .alert-success')
    //                         .append('</div>');

    //                     //clear all fields
    //                     $('#contactForm').trigger("reset");
    //                 },
    //                 error: function() {
    //                     // Fail message
    //                     $('#success').html("<div class='alert alert-danger'>");
    //                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                         .append("</button>");
    //                     $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
    //                     $('#success > .alert-danger').append('</div>');
    //                     //clear all fields
    //                     $('#contactForm').trigger("reset");
    //                 },
    //             });
    //         },
    //         filter: function() {
    //             return $(this).is(":visible");
    //         },
    //     });

    //     $("a[data-toggle=\"tab\"]").click(function(e) {
    //         e.preventDefault();
    //         $(this).tab("show");
    //     });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
$(function() {
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});
$(function() {
    $('.slide-out-div').tabSlideOut({
        tabHandle: '.handle', //class of the element that will be your tab
        pathToTabImage: 'img/lets-start.png', //path to the image for the tab (optionaly can be set using css)
        imageHeight: '309px', //height of tab image
        imageWidth: '52px', //width of tab image    
        tabLocation: 'right', //side of screen where tab lives, top, right, bottom, or left
        speed: 300, //speed of animation
        action: 'click', //options: 'click' or 'hover', action to trigger animation
        topPos: '200px', //position from the top
        fixedPosition: true //options: true makes it stick(fixed position) on scroll
    });
});
/*// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
*/