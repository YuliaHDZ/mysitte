document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Остановить стандартное поведение формы

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "secret") {
        message.style.color = "green";
        message.textContent = "Доступ разрешен! Добро пожаловать!";
    } else {
        message.style.color = "red";
        message.textContent = "Неверный пароль. Попробуйте снова.";
    }
});
