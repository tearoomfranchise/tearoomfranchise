console.log("hello");
const formwapper = document.querySelector(".my-form");

const fullname = document.querySelector("#name-form5-u");
const email = document.querySelector("#email-form5-u");
const phonenumber = document.querySelector("#phone-form5-u");
const message = document.querySelector("#textarea-form5-u");

// console.log(formwapper);
formwapper &&
  formwapper.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .send("service_qnet4lm", "template_ov1kgvb", {
        from_name: "Tea Room Website",
        to_name: fullname.value,
        to_phone: phonenumber.value,
        to_email: email.value,
        to_message: message.value,
      })
      .then((e) => {
        fullname.value = "";
        phonenumber.value = "";
        email.value = "";
        message.value = "";
      });
  });

const scrollTopBtn = document.querySelector(".scroll-top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("hello");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.classList.add("slide-in");
  } else {
    scrollTopBtn.classList.remove("slide-in");
  }
}

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
