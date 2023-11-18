let arr = document.querySelectorAll("#form p");
arr.forEach((ele) => {
  ele.addEventListener("click", () => {
    switch (ele.getAttribute("id")) {
      case "UN":
        document.getElementById("un").classList.remove("ip");
        document.getElementById("username").classList.add("active");
        break;
      case "EM":
        document.getElementById("em").classList.remove("ip");
        document.getElementById("email").classList.add("active");
        break;

      case "EM1":
        document.getElementById("em1").classList.remove("ip");
        document.getElementById("email1").classList.add("active");
        break;

      case "PW1":
        document.getElementById("pw1").classList.remove("ip");
        document.getElementById("pass1").classList.add("active");
        break;

      default:
        document.getElementById("pw").classList.remove("ip");
        document.getElementById("pass").classList.add("active");
        break;
    }
  });
});

document.getElementById("l").addEventListener("click", () => {
  document.getElementById("sign").classList.add("move");
  document.getElementById("login").classList.add("move");
});
document.getElementById("s").addEventListener("click", () => {
  document.getElementById("sign").classList.remove("move");
  document.getElementById("login").classList.remove("move");
});
