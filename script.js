function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kcutsav8084@gmail.com",
    Password: "1997@ugust",
    To: "kcutsav645@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Birthday Wish ",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
