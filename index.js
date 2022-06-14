const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  document.querySelector(".contact-form").reset();
  sendEmail(name, email, message);
});
function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kcutsav645@gmail.com",
    Password: "21B5BE6805A7BCBD19C33AB707B75BF3153D",
    To: email,
    From: "kcutsav645@gmail.com",
    Subject: `Your Wish My Love`,
    Body: `LoveName:${name}
                 EmailToLove:${email}
                 YourWish:${message}`,
  }).then((message) =>
    alert(
      "Happy Birthday Gomu 💘. I wish your every dream come true and alive in these year. Your all obastacle goes far away From your life. And I will be your smile of your face and love of your life. Every day is a new day but today is the specal day for us because it direct us towards our destiny in where we want to see eachother. I love 💘 you a lot gomu and i want to live my whole life with you so for the reason i will do works that make me your man and help us to move ahead togther with lots of love 💘. Happy Birthday Gomu 💘{Love Of My Life}"
    )
  );
}
