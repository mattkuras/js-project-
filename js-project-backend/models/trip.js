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
}