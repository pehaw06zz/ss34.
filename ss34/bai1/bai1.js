document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    let isValid = true;
    if (!email) {
      emailError.textContent = "Email is required";
      isValid = false;
    }
    if (!password) {
      passwordError.textContent = "Password is required";
      isValid = false;
    }
  
    if (confirmPassword !== password) {
      confirmError.textContent = "Passwords do not match";
      isValid = false;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      emailError.textContent = "Email is already registered";
      isValid = false;
    }
    if (isValid) {
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account registered successfully!");
      document.getElementById("registerForm").reset();
    }
  });
  
