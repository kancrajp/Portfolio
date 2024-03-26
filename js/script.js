const form = document.querySelector("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `name: ${name.value} <br> email : ${email.value} <br>
  subject : ${subject.value} <br> message : ${message.value}`;

  Email.send({
    SecureToken: "9122853e-e30e-41fc-a1aa-1a8f2cf32740",
    Username: "kancrajp@gmail.com",
    Password: "94DE401D3C2B4C8745DC9145645640D5D302",
    To: "kancrajp@gmail.com",
    From: "kancrajp@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thank You :)",
        text: "Message has been sent successfully",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  form.reset();
  return false;
});

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
