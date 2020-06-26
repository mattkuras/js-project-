class API {

    static addTrips(){
        fetch("http://localhost:3000/trips")
          .then(resp => resp.json())
          .then(trips => {
            trips.forEach(trip => {
                const { id, name, photos, description, season, rating, user_id } = trip
                new Trip(id, name, photos, description, season, rating, user_id)
            })
        })
    }


}