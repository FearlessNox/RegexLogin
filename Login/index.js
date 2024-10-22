function verificarEmail(userEmail){
    if(
        !userEmail.match(/@/) ||
        !userEmail.match(/[a-zA-Z1-9_]{2,}(?=@)/) ||
        !userEmail.match(/(?<=@)[a-zA-Z1-9_]{2,}/) ||
        !userEmail.match(/(?<=@..+\.)[a-zA-Z1-9_]{2,}/)
    ){
        let erro = new Error("Email não é válido")
        erro.input = "email"
        throw erro
    }
}

function verificarSenha(userPassword){
    if(
        !userPassword.match(/[a-z]{1,}/) ||
        !userPassword.match(/[A-Z]{1,}/) ||
        !userPassword.match(/[1-9]{1,}/) ||
        !userPassword.match(/.{8,}/) ||
        !userPassword.match(/[^a-zA-Z0-9\s]/)
    ){
        let erro = new Error("Senha não atende os requisitos")
        erro.input = "password"
        throw erro
    } else {
        
    }
}

let user = {}

document.getElementById('submit-btn').addEventListener('click', ev => {
    ev.preventDefault()
    console.clear()
    user.email = document.getElementById('user-email')
    user.password = document.getElementById('user-password')

    Object.entries(user).forEach(([key, value]) => {
        document.getElementById(`user-${key}`).removeAttribute("class")
    })

    let {email, password} = user

    try{
        verificarEmail(email.value),
        email.classList.add("Sucess")
        document.getElementById("user-email-desc").innerText = ""
        verificarSenha(password.value)
        password.classList.add("Sucess")
        document.getElementById("user-password-desc").innerText = ""
    } catch(error){
        const errorId = (`user-${error.input}`)
        document.getElementById(errorId).classList.add("Error")
        document.getElementById(`${errorId}-desc`).innerText = error.message
        // console.log(error.message)
    }
})