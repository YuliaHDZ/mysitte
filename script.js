document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // ���������� ����������� ��������� �����

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "secret") {
        message.style.color = "green";
        message.textContent = "������ ��������! ����� ����������!";
    } else {
        message.style.color = "red";
        message.textContent = "�������� ������. ���������� �����.";
    }
});
