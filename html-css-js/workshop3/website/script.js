$(document).ready(function () {

    // 1. Toggle Effect: Hero button changes background color randomly
    $('.info a, #color-toggle-btn').on('click', function (e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
        $('#hero').css({
            'background-image': 'none',
            'background-color': randomColor
        });
    });

    // 2. Image Gallery Enlargement Modal
    $('main img').on('click', function () {
        const imageSrc = $(this).attr('src');
        const altText = $(this).attr('alt') || 'Enlarged Image';

        const modalHTML = `
            <div class="modal-overlay" id="imgModal">
                <img src="${imageSrc}" alt="${altText}">
            </div>
        `;

        $('body').append(modalHTML);
    });

    $(document).on('click', '#imgModal', function () {
        $(this).remove();
    });

    // 3. Form Validation (Attaches directly to the HTML form)
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        $('.error-msg').text('');

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '') {
            $('#name-error').text('Please enter your name.');
            isValid = false;
        }

        if (email === '') {
            $('#email-error').text('Please enter your email.');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#email-error').text('Please enter a valid email address.');
            isValid = false;
        }

        if (message === '') {
            $('#message-error').text('Please write a message.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            $('#contact-form')[0].reset();
        }
    });
});
