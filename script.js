// Mobile Menu Toggle
document.querySelector(".mobile-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Tab Functionality
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and content
    tabBtns.forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Add active class to clicked button
    btn.classList.add("active");

    // Show corresponding content
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(`${tabId}-content`).classList.add("active");
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");

    const icon = question.querySelector("i");
    if (faqItem.classList.contains("active")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});

// Form Submission
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   // e.preventDefault();
//   // alert("Thank you for your message! Our team will contact you shortly.");
//   this.reset();
// });

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.querySelector(".nav-links").classList.remove("active");
  });
});

 gsap.registerPlugin(ScrollTrigger);

  const statItems = document.querySelectorAll(".stat-item h3");

  statItems.forEach((stat) => {
    const originalText = stat.innerText;
    const numberMatch = originalText.match(/[\d.,]+/); // extract number part
    const suffix = originalText.replace(numberMatch[0], ""); // get any suffix like %, h, +
    const startVal = 0;
    const endVal = parseFloat(numberMatch[0].replace(/,/g, ""));

    const count = { val: startVal };

    gsap.to(count, {
      val: endVal,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: stat,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        stat.innerText = Math.ceil(count.val).toLocaleString() + suffix;
      }
    });
  });