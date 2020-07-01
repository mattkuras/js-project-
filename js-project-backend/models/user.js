class User {
    constructor (name, username, password, id){
       this.name = name
       this.username = username
       this.password = password
       this.id = id 
       this.renderUser()
    }

    userHTML(){
        return `
        <p id="user-trips">${this.name}'s created trips </p>
        <p>name: ${this.name}</p>
        <p>username: ${this.username}</p>`
        document.getElementById("user-trips").addEventListener('click', )
    }

    renderUser(){
        const userContainer = document.getElementById("user-container")
        const userCard = document.createElement("div")
        userCard.innerHTML += this.userHTML ()
        userContainer.appendChild(userCard)
    }

    static renderForm(){
        const container = document.getElementById('container')

        const form = document.createElement('form')
        form.classList.add("hide")
        const label = document.createElement('h2')
        label.innerText = "sign up!"
        container.appendChild(label)
        label.addEventListener("click", () => {
            form.classList.remove("hide")
        })
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

