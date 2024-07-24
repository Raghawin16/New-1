document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});