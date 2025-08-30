document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (this.scrollY > 20) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }
        if (this.scrollY > 500) {
            document.querySelector('.scroll-up-btn').classList.add('show');
        } else {
            document.querySelector('.scroll-up-btn').classList.remove('show');
        }
    });

    document.querySelector('.scroll-up-btn').addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.documentElement.style.scrollBehavior = 'auto';
    });

    var menuItems = document.querySelectorAll('.navbar .menu li a');
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            document.documentElement.style.scrollBehavior = 'smooth';
        });
    });

    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.navbar .menu').classList.toggle('active');
        document.querySelector('.menu-btn i').classList.toggle('active');
    });

    var typed = new Typed('.typing', {
        strings: ['Student', 'Designer', 'Programmer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed('.typing-2', {
        strings: ['Student', 'Designer', 'Programmer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var owlCarousel = document.querySelector('.carousel');
    if (owlCarousel) {
        var carousel = new OwlCarousel(owlCarousel, {
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
});

var contactForm = document.getElementById('contact-form');
var contactMessage = document.getElementById('message');

var sendEmail = function(e) {
    e.preventDefault();
    emailjs.send('service_l795c8r', 'template_wo52xzi', {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value,
        user_subject: document.getElementById('subject').value,
        user_message: document.getElementById('message').value
    }, 'Mn7MBe8Ud4nVDEB0I')
    .then(function() {
        contactMessage.textContent = 'Message sent successfully ✅';

        setTimeout(function() {
            contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();
    })
    .catch(function() {
        contactMessage.textContent = 'Message not sent (service error) ❌';
    });
}

contactForm.addEventListener('submit', sendEmail);