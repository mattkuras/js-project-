class Trip {
    constructor(id, name, photos, description, season, rating, user_id ){
      this.id = id
      this.name = name
      this.photos = photos
      this.description = description
      this.season = season
      this.rating = rating
      this.user_id = user_id
      this.renderTrip()
    }

    tripHTML(){
        return `
          <a href="/trips/${this.id}"><h2 class="header">${this.name}</h2></a>
          <img src="${this.photos}" width="100" />
          <p>season: ${this.season}</p>
          <p>rating: ${this.rating}</p>
          <p>description: ${this.description} </p>
          <p>created by: ${this.user_id}></p>
          <button class="delete">DELETE ME???</button>
        `
      }

      deleteTrip(e){
        const id = parseInt(e.target.parentElement.parentElement.id)
        fetch(`http://localhost:3000/trips/${id}`,{
          method: 'DELETE'
        })
        .then(() => {
          document.getElementById('container').removeChild(document.getElementById(id))
        })
      }

      showTrip(e){
        e.preventDefault()
        const container = document.getElementById('container')
        container.innerHTML = ""

        this.renderTrip()

      }
     

 // render all our hogs to the page
 renderTrip (){
    const container = document.getElementById('container')

    const tripCard = document.createElement('div')
    container.appendChild(tripCard)
    tripCard.classList.add('card')
    tripCard.id = this.id
    

    const header = document.createElement('div')
    header.classList.add('card-header')
    tripCard.appendChild(header)

    // const image = document.createElement('img')
    // image.src = `${this.img}`
    // header.appendChild(image)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    tripCard.appendChild(cardBody)
    cardBody.innerHTML += this.tripHTML()
    const span = document.createElement('span')
    span.classList.add('tag')
    span.classList.add('tag-pink')
    cardBody.appendChild(span)

    
    
     tripCard.addEventListener('click', e => {
    
    //   e.preventDefault()
    //   // console.log(e.target.innerHTML)
        if (e.target.className.includes('delete')) this.deleteTrip(e);
          if (e.target.className.includes('header')); this.showTrip(e)
      
     })
  }

  
}