document.addEventListener('DOMContentLoaded', () => {
    // Event Handling
    const welcomeMessage = document.getElementById('welcomeMessage');
    const changeMessageBtn = document.getElementById('changeMessageBtn');
    const secretBtn = document.getElementById('secretBtn');

    // Button Click
    changeMessageBtn.addEventListener('click', () => {
        welcomeMessage.textContent = `Explore our services at ${new Date().toLocaleTimeString()}!`;
        changeMessageBtn.style.backgroundColor = '#6ab0f3';
    });

    // Hover Effect
    changeMessageBtn.addEventListener('mouseenter', () => {
        changeMessageBtn.style.transform = 'scale(1.1)';
    });
    changeMessageBtn.addEventListener('mouseleave', () => {
        changeMessageBtn.style.transform = 'scale(1)';
    });

    // Keypress Detection
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            welcomeMessage.textContent = 'You pressed Enter! Learn about our care!';
        }
    });

    // Secret Double-Click Action
    secretBtn.addEventListener('dblclick', () => {
        document.body.style.backgroundColor = '#d4e4f7';
        alert('Secret unlocked! Discover our patient-first approach!');
    });

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Form Validation
    const form = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const locationInput = document.getElementById('location');
    const genderInput = document.getElementById('gender');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const locationError = document.getElementById('locationError');
    const genderError = document.getElementById('genderError');
    const messageError = document.getElementById('messageError');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    function validateLocation(location) {
        return location.trim().length >= 2;
    }

    function validateGender(gender) {
        return gender !== '';
    }

    function validateMessage(message) {
        return message.trim().length >= 5;
    }

    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.style.borderColor = 'var(--error-color)';
    }

    function clearError(input, errorElement) {
        errorElement.textContent = '';
        input.style.borderColor = '#e0e0e0';
    }

    // Real-time Validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'Name is required');
        } else {
            clearError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('input', () => {
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, emailError, 'Enter a valid email');
        } else {
            clearError(emailInput, emailError);
        }
    });

    phoneInput.addEventListener('input', () => {
        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, phoneError, 'Enter a 10-digit phone number');
        } else {
            clearError(phoneInput, phoneError);
        }
    });

    locationInput.addEventListener('input', () => {
        if (!validateLocation(locationInput.value)) {
            showError(locationInput, locationError, 'Enter a valid city/state (min 2 characters)');
        } else {
            clearError(locationInput, locationError);
        }
    });

    genderInput.addEventListener('change', () => {
        if (!validateGender(genderInput.value)) {
            showError(genderInput, genderError, 'Please select a gender');
        } else {
            clearError(genderInput, genderError);
        }
    });

    messageInput.addEventListener('input', () => {
        if (!validateMessage(messageInput.value)) {
            showError(messageInput, messageError, 'Message must be at least 5 characters');
        } else {
            clearError(messageInput, messageError);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput, nameError);
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, emailError, 'Enter a valid email');
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, phoneError, 'Enter a 10-digit phone number');
            isValid = false;
        } else {
            clearError(phoneInput, phoneError);
        }

        if (!validateLocation(locationInput.value)) {
            showError(locationInput, locationError, 'Enter a valid city/state (min 2 characters)');
            isValid = false;
        } else {
            clearError(locationInput, locationError);
        }

        if (!validateGender(genderInput.value)) {
            showError(genderInput, genderError, 'Please select a gender');
            isValid = false;
        } else {
            clearError(genderInput, genderError);
        }

        if (!validateMessage(messageInput.value)) {
            showError(messageInput, messageError, 'Message must be at least 5 characters');
            isValid = false;
        } else {
            clearError(messageInput, messageError);
        }

        if (isValid) {
            alert('Feedback submitted successfully!');
            form.reset();
        }
    });
});