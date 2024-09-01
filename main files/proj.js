

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const recommendation = document.getElementById('recommendation').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    let isValid = true;

    
    if (name === '') {
        displayError('nameError', 'Name is required');
        isValid = false;
    }

    
    if (email === '') {
        displayError('emailError', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        displayError('emailError', 'Enter a valid email address');
        isValid = false;
    }

   
    if (recommendation === '') {
        displayError('recommendationError', 'Please recommend an anime');
        isValid = false;
    }

    
    if (feedback === '') {
        displayError('feedbackError', 'Feedback cannot be empty');
        isValid = false;
    }

    
    if (isValid) {
        console.log({
            name: name,
            email: email,
            recommendation: recommendation,
            feedback: feedback
        });
        alert('Feedback submitted successfully!');
       
    }
});

function displayError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('recommendationError').innerText = '';
    document.getElementById('feedbackError').innerText = '';
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
