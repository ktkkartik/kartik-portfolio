
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_c72dcod', 'template_clb9eyd', this)
      .then(function(response) {
         alert("Message sent successfully!");
      }, function(error) {
         alert("FAILED to send message.\n" + JSON.stringify(error));
      });

    // Optional: Reset the form
    this.reset();
  });

