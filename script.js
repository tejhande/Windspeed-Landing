// Loading animation
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 1500);
});

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill all fields");
    return;
  }

  // In a real application, you would send the data to a server here
  console.log("Form submitted:", { name, email, subject, message });

  // Show success message
//   alert("Thank you for your message! We'll get back to you soon.");

  // Reset form
  this.reset();
});
