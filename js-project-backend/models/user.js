class User {
    constructor (id, name, username, password){
        this.id = id 
        this.name = name
        this.username = username
        this.password = password 
    }

    static renderForm(){
        const container = document.getElementById('container')

        const form = document.createElement('form')
        form.id = "user-form"
        container.appendChild(form)
        const inputName = document.createElement('input')
        inputName.type = "text"
        inputName.name = "name"
        inputName.placeholder = "name"
        form.appendChild(inputName)

        const inputUsername = document.createElement('input')
        inputUsername.type = "text"
        inputUsername.name = "username"
        inputUsername.placeholder = "username"
        form.appendChild(inputUsername)

        const inputPassword = document.createElement('input')
        inputPassword.type = "password"
        inputPassword.name = "password"
        inputPassword.placeholder = "password"
        form.appendChild(inputPassword)

        const subButton = document.createElement('input')
        subButton.type = "submit"
        subButton.value = "Submit"
        form.appendChild(subButton)
    }

}