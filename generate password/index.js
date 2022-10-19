var password = document.getElementById("password");
function create() {
  var use =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  var lengthx = 10;
  var password = "";
  for (var i = 0; i <= lengthx; i++) {
    var random = Math.floor(Math.random() * use.length);
    password += use.substring(random, random + 1);
  }
  document.getElementById("password").value = password;
}
function copyPass() {
  var c = document.getElementById("password");
  c.select();
  document.execCommand("copy");
}
