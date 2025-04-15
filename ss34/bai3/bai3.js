const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !password || !confirmPassword) {
    message.textContent = "Vui lòng nhập đầy đủ thông tin!";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Mật khẩu xác nhận không khớp!";
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    message.textContent = "Email đã được đăng ký trước đó!";
    return;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  message.style.color = "green";
  message.textContent = "Đăng ký thành công!";
  form.reset();
});
