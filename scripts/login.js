const LOCAL_STORAGE_USERS_KEY = "users";

const formElement = document.querySelector("form.form-conteudo")

function loginFormHandler(event) {
    event.preventDefault()

    const formData = new FormData(formElement);
    const email = formData.get("email");
    const password = formData.get("password")

    users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY))

    const userExists = users.find((user) => user.email === email);

    if (!userExists) {
        formElement.querySelector(".loginError").innerText = "E-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente."
        return
    }

    if (userExists.password !== password) {
        formElement.querySelector(".loginError").innerText = "E-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente."
        return
    }

    localStorage.setItem("usuario_logado", userExists.email)

    window.location.replace("./usuarios/listar-usuarios.html")

}


formElement.addEventListener("submit", loginFormHandler)


document.addEventListener("DOMContentLoaded", () => {
    const users = [{
        "username": "Administrador",
        "role": "ADMIN",
        "email": "admin@agendatennis.com",
        "password": "123"
    }]

    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users))
})