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

    const image = document.createElement('img')
    image.src = `${this.img}`
    header.appendChild(image)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    tripCard.appendChild(cardBody)
//    cardBody.innerHTML += this.tripHTML()
    const span = document.createElement('span')
    span.classList.add('tag')
    span.classList.add('tag-pink')
    cardBody.appendChild(span)
    
    // tripCard.addEventListener('click', e => {
    //   if (e.target.className === 'toggle') this.greaseToggle(e)
    //   if (e.target.className.includes('delete')) this.deleteHog(e)
    //   if (e.target.className.includes('header')) this.showHog(e)
    // })
  }
}