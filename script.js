// navbar scroll function
window.onscroll = function () {
  navScroll();
};

function navScroll() {
  var navBar = document.getElementById("navbar");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    navBar.classList.add("nav-scroll");
  } else {
    navBar.classList.remove("nav-scroll");
  }
}

// hero button click function
function scrollToServices() {
  var servicesSection = document.getElementById("services");
  servicesSection.scrollIntoView({ behavior: "smooth" });
}

// toggle navbar
var navLinks = document.querySelector(".nav-links");
var burger = document.querySelector(".burger");
var links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", function() {
  // toggle navbar active class
  navLinks.classList.toggle("active");

  // animate links
  links.forEach(function(link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = "navLinkFade 0.5s ease forwards " + (index / 7 + 0.5) + "s";
    }
  });

  // burger animation
  burger.classList.toggle("toggle");
});


// service card hover function
function cardHover(card) {
  var cardOverlay = card.getElementsByClassName("card-overlay")[0];
  cardOverlay.style.display = "block";
}

function cardOut(card) {
  var cardOverlay = card.getElementsByClassName("card-overlay")[0];
  cardOverlay.style.display = "none";
}

// pricing plan toggle function
function togglePlan() {
  var toggle = document.getElementById("plan-toggle");
  var basicPlan = document.getElementById("basic-plan");
  var premiumPlan = document.getElementById("premium-plan");

  if (toggle.checked) {
    basicPlan.style.display = "none";
    premiumPlan.style.display = "block";
  } else {
    basicPlan.style.display = "block";
    premiumPlan.style.display = "none";
  }
}

// form validation function
function validateForm() {
  var name = document.forms["contact-form"]["name"].value;
  var email = document.forms["contact-form"]["email"].value;
  var message = document.forms["contact-form"]["message"].value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill in all the fields.");
    return false;
  }
}
