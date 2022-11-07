let button = document.querySelector(".button");

emailjs.init("user_n00IFqkCIrHm6D3teTlZD");

button.onclick = function () {
  emailjs.send("service_u6tq2om", "template_e8qp568").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

