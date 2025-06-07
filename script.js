document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created successfully!");
  window.location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const emailInput = document.getElementById("loginEmail").value.trim();
  const passwordInput = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (emailInput === storedEmail && passwordInput === storedPassword) {
    document.getElementById("loginMessage").textContent = "Login successful!";
    document.getElementById("loginMessage").style.color = "green";
    setTimeout(() => {
      window.location.href = "home.html"; 
    }, 1000);
  } 
  else {
    document.getElementById("loginMessage").textContent = "Invalid email or password.";
    document.getElementById("loginMessage").style.color = "red";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const accountMenu = document.querySelector(".nav-2 .flex > ul > li:nth-child(2) > a");
    accountMenu.innerHTML = `${loggedInUser} <i class="fas fa-angle-down"></i>`;
  }
});