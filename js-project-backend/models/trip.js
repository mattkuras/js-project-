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

      // searchTrips(e){
      //   console.log(e)
      //   e.preventDefault()
      //   document.getElementById("card").innerHTML = ""
      //   fetch("http://localhost:3000/trips")
      //   .then(resp => resp.json())
      //   .then(trips => {
      //     trips.forEach(trip => {
      //         const { id, name, photos, description, season, rating, user_id } = trip
      //         new Trip(id, name, photos, description, season, rating, user_id)
      //     })
      // })
      // }

      deleteTrip(e){
        console.log("deleted")
        const id = parseInt(this.id)
      
        fetch(`http://localhost:3000/trips/${id}`,{
          method: 'DELETE'
        })
        .then(() => {
          document.getElementById('container').removeChild(document.getElementById(id))
        })
      }

      showTrip(e){
       
        console.log("show trip")
        document.getElementById("container").innerHTML = ""
        const id = parseInt(this.id)
        fetch(`http://localhost:3000/trips/${id}`)
        .then(resp => resp.json())
        .then(trip => {
          
              const { id, name, photos, description, season, rating, user_id } = trip
              new Trip(id, name, photos, description, season, rating, user_id)
          })
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
       e.preventDefault()
      console.log(e.target.className)

        if (e.target.className.includes('delete')) this.deleteTrip(e)
        if (e.target.className.includes('header')) this.showTrip(e)
        
     })
  
    }

  
}