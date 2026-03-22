document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1800,
            once: true,
            offset: 100,
            easing: 'ease-out-quart',
        });
    }

    const textElement = document.querySelector(".content-box h1 span");
    if (textElement && !window.hasStartedTyping) {
        window.hasStartedTyping = true;
        const text = "Digital Art";
        let index = 0;
        textElement.textContent = ""; 

        function typeEffect() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150);
            }
        }
        setTimeout(typeEffect, 1000);
    }

    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#particles-js",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1e3a8a,
            backgroundColor: 0x050505,
            points: 8.00,
            maxDistance: 15.00,
            spacing: 20.00,
            showDots: true
        });
    }

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".visual-box, .node"), {
            max: 15,
            speed: 1000,
            glare: false,
            "full-page-listening": false,
            scale: 1,
            reset: true,
        });
    }

    if (typeof emailjs !== 'undefined') {
        emailjs.init("r0hEdpoF7-P7ukGGs"); 
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); 
                const btn = contactForm.querySelector('button');
                const btnSpan = btn.querySelector('span') || btn;
                btn.disabled = true;
                const originalText = btnSpan.innerText;
                btnSpan.innerText = "Sending Proposal... 🚀";

                emailjs.sendForm('service_97usb9a', 'template_cfdpqpf', contactForm)
                    .then(function() {
                        alert("Done! Your message reached Mohamed. ✅");
                        btn.disabled = false;
                        btnSpan.innerText = originalText;
                        contactForm.reset();
                    }, function(error) {
                        alert("Oops! Something went wrong.");
                        btn.disabled = false;
                        btnSpan.innerText = originalText;
                    });
            });
        }
    }
});