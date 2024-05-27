document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donation-form');

    donationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                sendDonationData(latitude, longitude);
                sendSmsWithLocation(latitude, longitude);
                embedGoogleMaps(latitude, longitude); // Embed Google Maps
            }, (error) => {
                alert('Geolocation is not supported by this browser or permission denied.');
                sendDonationData();
            });
        } else {
            alert('Geolocation is not supported by this browser.');
            sendDonationData();
        }
    });

    function sendDonationData(latitude = '', longitude = '') {
        const formData = new FormData(donationForm);
        formData.append('location', `Latitude: ${latitude}, Longitude: ${longitude}`);
        formData.append('phone', '9697981972');  // Adding the phone number to the form data

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your donation!');
                donationForm.reset();
            } else {
                alert('There was an issue with your donation. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    }

    function sendSmsWithLocation(latitude, longitude) {
        const locationMessage = `Donor Location: Latitude ${latitude}, Longitude ${longitude}`;
        
        // Replace with actual API endpoint and method to send SMS
        fetch('https://your-sms-api-endpoint.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: '9697981972',
                message: locationMessage,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('SMS sent successfully');
            } else {
                console.log('Failed to send SMS');
            }
        })
        .catch(error => {
            console.error('Error sending SMS:', error);
        });
    }

    function embedGoogleMaps(latitude, longitude) {
        const mapContainer = document.getElementById('google-map');
        mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${latitude}!2d${longitude}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }
});
